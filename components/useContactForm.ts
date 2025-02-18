// useContactForm.ts
import { ref } from 'vue';
import * as yup from 'yup';

export function useContactForm() {
  const isSubmitted = ref(false);
  const isErrored = ref(false);
  const errorMessage1 = ref<string | null>(null);
  const errorMessage = ref<string | null>(null);
  const selectedFiles = ref<FileList | null>(null);

  // Styles
  const classesInput =
    'w-full text-(--color-custom-red) p-3 mt-2 rounded-lg border border-(--color-custom-red)-300  focus:outline-none focus:ring-2 focus:ring-blue-500';
  const classesFlexAtStart = 'flex flex-col sm:flex-row gap-4';
  const textError = 'text-red-500 text-sm mt-1';

  const validationSchema = yup.object({
    firstName: yup.string().required('Veuillez entrer votre prénom.'),
    lastName: yup.string().required('Veuillez entrer votre nom de famille.'),
    phone: yup
      .string()
      .matches(/^\d+$/, 'Le numéro doit être composé de chiffres uniquement.')
      .required('Veuillez entrer votre numéro de téléphone.'),
    email: yup
      .string()
      .email('Veuillez entrer une adresse email valide.')
      .required('Veuillez entrer votre adresse email.'),
    message: yup.string(),
  });

  const filesInformations = computed(() => {
    if (selectedFiles.value) {
      if (selectedFiles.value.length === 1) {
        return `${selectedFiles.value.length} fichier sélectionné`;
      }
      return `${selectedFiles.value.length} fichiers sélectionnés`;
    }
    return 'Ajouter des fichiers';
  });

  const handleFiles = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      selectedFiles.value = input.files;
    }
  };

  const resetForm = () => {
    isSubmitted.value = false;
    isErrored.value = false;
    errorMessage1.value = null;
    errorMessage.value = null;
    selectedFiles.value = null;
    // reset file input
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) {
      (fileInput as HTMLInputElement).value = '';
    }
  };

  return {
    isSubmitted,
    isErrored,
    errorMessage1,
    errorMessage,
    selectedFiles,
    validationSchema,
    handleFiles,
    resetForm,
    classesInput,
    classesFlexAtStart,
    textError,
    filesInformations,
  };
}
