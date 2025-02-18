import nodemailer from 'nodemailer';
import { Attachment } from 'nodemailer/lib/mailer';
import { z } from 'zod';

interface EmailDeliveryDetails {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message?: string;
  file?: Attachment[];
}
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

const imageUploadSchema = z.object({
  image: z
    .any()
    .refine(
      (file) => file?.data.length <= MAX_FILE_SIZE,
      `La taille de l'image ne doit pas dépasser ${MAX_FILE_SIZE / 1000000} Mo`
    )
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      'Seuls les fichiers de type jpeg, jpg, png et webp sont acceptés'
    ),
});

const emailSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  email: z.string().email(),
  message: z.string().optional(),
});

export default defineEventHandler(async (event) => {
  try {
    const formDataBody = await readMultipartFormData(event);
    const formData = new FormData();
    const attachments: Attachment[] = [];

    //Parsing of the form data and attachments
    formDataBody?.forEach((value) => {
      if (value.name && value.data) {
        if (value.name.startsWith('files')) {
          //Image upload verification and parsing
          imageUploadSchema.parse({ image: value });
          attachments.push({
            filename: value.filename,
            content: value.data,
          });
        } else {
          //Parsing of the other fields
          formData.append(value.name, value.data.toString());
        }
      }
    });

    const formDataObject = formDataToObject(formData);
    const parsedBody = emailSchema.parse(formDataObject);

    //Send email with parsed body and attachments
    await sendMail(parsedBody, attachments);

    //Return response to the client error or success
    return new Response('Email sent', {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Gestion des erreurs de validation
      const validationErrors = error.errors.map((e) => e.message).join(', ');
      console.error(`Erreur de validation: ${validationErrors}`);
      throw createError({
        statusCode: 400,
        message: `Erreur de validation: ${validationErrors}`,
      });
    } else if (error instanceof Error) {
      console.error(
        `Erreur lors du traitement de la requête: ${error.message}`,
        error
      );
      throw createError({
        statusCode: 500,
        message: `${error.message}`,
      });
    } else {
      // Erreur générique
      console.error('Erreur inconnue', error);
      throw createError({ statusCode: 500, message: 'Erreur inconnue' });
    }
  }
});

const sendMail = async (body: EmailDeliveryDetails, files: Attachment[]) => {
  if (!body.message) {
    body.message = 'Pas de message';
  }

  const from = process.env.NUXT_MAIL_USERNAME;
  const to = process.env.NUXT_MAIL_TARGET;

  const htmlContent = `
  <h2>Demande de devis</h2>
  <p><strong>Prénom:</strong> ${body.firstName}</p>
  <p><strong>Nom:</strong> ${body.lastName}</p>
  <p><strong>Téléphone:</strong> ${body.phone}</p>
  <p><strong>Email:</strong> ${body.email}</p>
  <p><strong>Message:</strong> ${body.message}</p>
`;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: from,
      pass: process.env.NUXT_MAIL_PASSWORD,
    },
    // tls: {
    //   rejectUnauthorized: false,
    // },
  });

  const mailOptions = {
    from: from,
    to: to,
    subject: 'Nouvelle demande de devis',
    html: htmlContent,
    attachments: files,
  };

  try {
    //Envoie de l'email
    await transporter.sendMail(mailOptions);
    console.info(`Email envoyé avec succès`);
  } catch (error) {
    //Gestion des erreurs d'envoi
    console.error("Erreur lors de l'envoi de l'email :", error);
    throw createError({
      statusCode: 500,
      message: "Erreur lors de l'envoi de l'email.",
    });
  }
};

function formDataToObject(formData: FormData): Record<string, string> {
  const obj: Record<string, string> = {};
  formData.forEach((value, key) => {
    obj[key] = value.toString();
  });
  return obj;
}
