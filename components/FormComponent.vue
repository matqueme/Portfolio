<template>
  <div
    class="mt-6 flex w-full flex-col items-center gap-8 rounded-2xl text-left"
  >
    <Form
      :validation-schema="validationSchema"
      @submit="onSubmit"
      class="flex w-full max-w-screen-lg flex-col gap-4"
    >
      <div :class="classesFlexAtStart">
        <div class="flex-1">
          <label for="lastName" class="font-semibold">Nom </label>
          <Field
            type="text"
            name="lastName"
            id="lastName"
            as="input"
            placeholder="QUEMENER"
            :class="classesInput"
          />
          <ErrorMessage name="lastName" :class="textError" />
        </div>
        <div class="flex-1">
          <label for="firstName" class="font-semibold">Prénom </label>
          <Field
            type="text"
            name="firstName"
            id="firstName"
            as="input"
            placeholder="Quentin"
            :class="classesInput"
          />
          <ErrorMessage name="firstName" :class="textError" />
        </div>
      </div>

      <div :class="classesFlexAtStart">
        <div class="flex-1">
          <label for="phone" class="font-semibold">Téléphone </label>
          <Field
            type="tel"
            name="phone"
            id="phone"
            as="input"
            placeholder="07 68 08 16 84"
            :class="classesInput"
          />
          <ErrorMessage name="phone" :class="textError" />
        </div>
        <div class="flex-1">
          <label for="email" class="font-semibold"> Email </label>
          <Field
            type="email"
            name="email"
            as="input"
            id="email"
            placeholder="agenceQ&M@gmail.com"
            :class="classesInput"
          />
          <ErrorMessage name="email" :class="textError" />
        </div>
      </div>

      <div class="relative mb-0">
        <label for="message" class="font-semibold">
          Message
          <span class="text-sm font-normal text-gray-700 italic"
            >(Optionnel)</span
          >
        </label>
        <Field
          id="message"
          name="message"
          as="textarea"
          placeholder="Décrivez votre besoin ou vos questionnements, indiquez vos disponibilités et votre moyen de contact préféré."
          rows="5"
          style="resize: none"
          :class="classesInput"
        />
        <div class="absolute right-0 bottom-2 cursor-pointer px-4 py-2">
          <label for="files" class="flex cursor-pointer items-center gap-2">
            <PhosphorIconUploadSimple size="24" />
            <span class="text-sm text-gray-700">{{ filesInformations }}</span>
            <input
              id="files"
              name="files"
              type="file"
              multiple
              @change="handleFiles"
              class="hidden"
            />
          </label>
        </div>
      </div>

      <p v-if="isSubmitted" class="font-semibold text-green-800">
        Le formulaire a été envoyé !
      </p>
      <p v-if="isErrored" class="text-(--color-custom-red)">
        {{ errorMessage1 }}
        <br />
        <span class="italic"> {{ errorMessage }}</span>
      </p>
      <p v-if="isErrored" class="text-(--color-custom-red) italic"></p>

      <div class="flex w-full justify-end gap-4">
        <button
          type="submit"
          :disabled="isSubmitDisabled"
          :class="[
            'mt-4 rounded-full bg-(--color-custom-red) px-6 py-2 font-medium text-white hover:bg-(--color-custom-red)/85 focus:ring-2 focus:ring-(--color-custom-red) focus:outline-none',
            { 'cursor-not-allowed opacity-50': isSubmitDisabled },
          ]"
        >
          <span>{{ submitButtonText }}</span>
        </button>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Field, ErrorMessage, Form } from 'vee-validate';
import { ref } from 'vue';

//Interface
interface ContactFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message?: string;
}

import { useContactForm } from './useContactForm';

const {
  isSubmitted,
  isErrored,
  errorMessage1,
  errorMessage,
  selectedFiles,
  validationSchema,
  handleFiles,
  classesInput,
  classesFlexAtStart,
  textError,
  filesInformations,
} = useContactForm();

const isSubmitDisabled = ref(false);
const submitButtonText = ref('Envoyer');
let countdown = 5;
let countdownInterval: ReturnType<typeof setInterval> | null = null;

const onSubmit = async (values: unknown) => {
  try {
    // Créer un objet FormData pour envoyer les fichiers
    const formData = new FormData();
    const formValues = values as ContactFormData;

    // Ajouter les valeurs du formulaire à formData
    formData.append('firstName', formValues.firstName || '');
    formData.append('lastName', formValues.lastName || '');
    formData.append('phone', formValues.phone || '');
    formData.append('email', formValues.email || '');
    formData.append('message', formValues.message || '');

    if (selectedFiles.value) {
      Array.from(selectedFiles.value).forEach((file, index) => {
        formData.append(`files[${index}]`, file);
      });
    }

    isSubmitDisabled.value = true;
    submitButtonText.value = 'Envoi en cours...';

    const response = await fetch('/api/send-email', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json(); // Lire la réponse pour obtenir le message d'erreur
      errorMessage.value = errorData.message;
      if (errorData.statusCode === 400) {
        errorMessage1.value = 'Veuillez vérifier les champs du formulaire.';
      } else {
        errorMessage1.value =
          "Une erreur est survenue lors de l'envoi du formulaire. Contactez-nous par mail ou par téléphone. Merci.";
      }
      isSubmitDisabled.value = false;
      submitButtonText.value = 'Envoyer';
      throw new Error(
        errorData.message || "Erreur lors de l'envoi du formulaire"
      );
    }
    isSubmitted.value = true;
    isErrored.value = false;

    // Démarrer le compte à rebours
    countdown = 5;
    countdownInterval = setInterval(() => {
      submitButtonText.value = `Renvoyer dans ${countdown}s`;
      if (countdown === 0) {
        clearInterval(countdownInterval!);
        isSubmitDisabled.value = false;
        submitButtonText.value = 'Envoyer';
      }
      countdown -= 1;
    }, 1000);
  } catch (error) {
    console.error(error);
    isSubmitted.value = false;
    isErrored.value = true;
  }
};
</script>

<style scoped>
.opacity-50 {
  opacity: 0.5;
}
.cursor-not-allowed {
  cursor: not-allowed;
}
</style>
