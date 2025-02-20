<template>
  <div class="section-color bg-[#F0EBE3] text-black" id="contactSection">
    <div class="section text-center">
      <h2>
        Créez le
        <span
          class="relative inline-block text-(--color-custom-red)"
          @mouseover="handleMouseOver"
          @mouseleave="handleMouseLeave"
        >
          <h2 class="inline-block" ref="textRef">lien</h2>
          <div
            ref="iconRef"
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-2 opacity-0"
          >
            <PhosphorIconLink
              weight="bold"
              class="h-8 w-8 sm:h-12 sm:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16"
            />
          </div>
        </span>
        avec nous
      </h2>
      <p class="mt-2">
        Que ce soit pour un projet ou une simple question, nous sommes là pour
        vous accompagner.
      </p>
      <div
        class="m-10 flex flex-col items-center justify-center gap-4 text-center text-xl font-semibold text-(--color-custom-red) sm:flex-row"
      >
        <a
          href="tel:+33768081684"
          target="_blank"
          class="flex flex-row items-center gap-4 rounded-full border-2 border-(--color-custom-red) px-6 py-2 transition-transform duration-300 hover:scale-110"
        >
          <PhosphorIconDeviceMobile size="24" />07 68 08 16 84
        </a>
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
import { ref } from 'vue';
import { gsap } from 'gsap';
import FormComponent from '../FormComponent.vue';

const iconRef = ref<HTMLElement | null>(null);
const textRef = ref<HTMLElement | null>(null);

const handleMouseOver = () => {
  gsap.to(iconRef.value, {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 360,
    duration: 0.5,
    ease: 'back.out',
  });
  gsap.to(textRef.value, {
    opacity: 0,
    scale: 0.9,
    duration: 0.5,
    ease: 'power2.out',
  });
};

const handleMouseLeave = () => {
  gsap.to(iconRef.value, {
    opacity: 0,
    scale: 0.8,
    y: 10,
    rotate: 0,
    duration: 0.5,
    ease: 'power2.out',
  });
  gsap.to(textRef.value, {
    opacity: 1,
    scale: 1,
    duration: 0.5,
    ease: 'power2.out',
  });
};
</script>
