<template>
  <div
    v-if="!cookiesAccepted"
    class="fixed right-0 bottom-0 z-50 w-full md:right-4 md:bottom-4 md:w-[500px] md:p-2 lg:w-[600px] xl:w-[600px] 2xl:w-[700px]"
  >
    <div
      class="rounded-ss-sm bg-(--color-custom-beige) p-4 text-black shadow-2xl md:rounded-lg"
    >
      <div class="mb-4 flex flex-col gap-4">
        <div class="flex items-center gap-3">
          <SvgoCookie class="h-12 w-12" />
          <h3 class="text-lg font-bold">Utilisation des cookies</h3>
        </div>
        <p class="mb-4">
          Ce site utilise des cookies pour améliorer votre expérience et pour
          les statistiques. En acceptant, vous consentez à l'utilisation de
          cookies pour analyser le trafic du site et personnaliser le contenu.
          Vous pouvez refuser les cookies si vous le souhaitez.
        </p>
      </div>
      <div class="flex justify-end space-x-2">
        <button
          @click="declineCookies"
          class="rounded-full bg-gray-500 px-4 py-2 text-white transition-colors duration-300 hover:cursor-pointer hover:bg-gray-600"
        >
          Refuser
        </button>
        <button
          @click="acceptCookies"
          class="rounded-full bg-(--color-custom-red) px-4 py-2 text-white transition-colors duration-300 hover:cursor-pointer hover:bg-(--color-custom-red)/80"
        >
          Accepter
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCookie } from '#app';
import { useGtag } from '#imports';

const cookiesAccepted = useCookie('cookiesAccepted', {
  default: () => 'false',
});

const { gtag } = useGtag();

const acceptCookies = () => {
  cookiesAccepted.value = 'true';
  gtag('consent', 'update', {
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    ad_storage: 'granted',
    analytics_storage: 'granted',
  });
};

const declineCookies = () => {
  cookiesAccepted.value = 'false';
};
</script>
