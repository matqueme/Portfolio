<template>
  <div class="section-color bg-[#F0EBE3] text-black">
    <div class="section text-center">
      <h2>
        Créez le <span class="text-(--color-custom-red)">lien</span> avec nous
      </h2>
      <p class="mt-2">
        Que ce soit pour un projet ou une simple question, nous sommes là pour
        vous accompagner.
      </p>
      <div
        class="m-10 flex flex-col items-center justify-center gap-4 text-center font-semibold text-(--color-custom-red) sm:flex-row"
      >
        <div class="flex flex-col gap-4 text-lg md:flex-row md:gap-8">
          <a
            href="tel:+33768081684"
            target="_blank"
            class="flex flex-row items-center gap-4 rounded-full border-2 border-(--color-custom-red) px-6 py-2 transition-transform duration-300 hover:scale-110"
          >
            <PhosphorIconDeviceMobile size="24" />07 68 08 16 84
          </a>
        </div>
        <a
          href="mailto:agenceQ&M@gmail.com"
          target="_blank"
          class="flex flex-row items-center gap-4 rounded-full border-2 border-(--color-custom-red) px-6 py-2 transition-transform duration-300 hover:scale-110"
        >
          <PhosphorIconEnvelope size="24" />
          agenceQ&M@gmail.com
        </a>
      </div>
      <p class="font-decorative text-center text-2xl">OU</p>
      <FormComponent />
    </div>
  </div>
</template>

<script setup lang="ts">
import FormComponent from '../FormComponent.vue';
</script>
