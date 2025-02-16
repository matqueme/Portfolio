<template>
  <div
    ref="container"
    class="bg-dots flex h-screen items-center justify-center bg-[#F0EBE3]"
  >
    <div
      class="flex max-w-screen-2xl items-center justify-between gap-6 px-16 py-8"
    >
      <div class="w-1/2">
        <h1 ref="title" class="font-[gebuk-regular] text-6xl">
          Bienvenue dans
          <div
            @mouseenter="animateTextTurnIn"
            @mouseleave="animateTextTurnOut"
            class="inline-block"
          >
            <span ref="notreElement" class="inline-block text-[#DF463E]">
              notre
            </span>
          </div>

          univers
        </h1>
        <h2 ref="subtitle" class="font-[TitilliumWeb-Regular] text-xl">
          Nous concevons des expériences web où l'élégance intemporelle
          rencontre la précision du digital. Chaque projet est une fusion d’art
          et de technologie, pensée pour marquer les esprits.
        </h2>
        <div class="mt-8 flex flex-row">
          <button
            ref="contactButton"
            class="overflow-hidden rounded-full bg-[#DF463E] px-6 py-3 font-[TitilliumWeb-SemiBold] text-xl text-white hover:cursor-pointer"
            @mouseenter="animateTextSlideIn"
            @mouseleave="animateTextSlideOut"
          >
            <span ref="textButtonElement" class="flex"> Contactez-nous </span>
          </button>
          <button
            ref="projectsButton"
            class="relative ml-4 flex items-center justify-center overflow-hidden rounded-full border-2 border-[#DF463E] px-6 py-3 font-[TitilliumWeb-SemiBold] text-xl text-[#DF463E] hover:cursor-pointer"
            @mouseenter="animateButtonCircleIn"
            @mouseleave="animateButtonCircleOut"
            @mousemove="moveCircle"
          >
            <span class="z-40 inline-block"> Découvrez nos projets </span>
            <PhosphorIconArrowCircleRight
              size="24"
              class="z-40 ml-2 inline-block"
            />
            <svg class="absolute inset-0 z-0 h-full w-full">
              <circle
                ref="circleElement"
                cx="50%"
                cy="50%"
                r="0"
                fill="rgba(223, 70, 62)"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="w-1/2">
        <NuxtImg
          src="/images/Notre-Dame-De-Paris.png"
          alt="Notre-Dame de Paris"
          class="h-full w-full overflow-hidden rounded-xl object-cover"
        />
      </div>
    </div>
  </div>
  <OffersSections />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import {
  useTextTurnAnimations,
  useButtonCircleAnimations,
  useTextSlideAnimations,
} from '@/composables/animations';
import OffersSections from '~/sections/homepage/OffersSections.vue';

const notreElement = ref<HTMLElement | null>(null);
const projectsButton = ref<HTMLElement | null>(null);
const textButtonElement = ref<HTMLElement | null>(null);
const circleElement = ref<SVGCircleElement | null>(null);

const { animateTextTurnIn, animateTextTurnOut } =
  useTextTurnAnimations(notreElement);
const { animateButtonCircleIn, animateButtonCircleOut, moveCircle } =
  useButtonCircleAnimations(projectsButton, circleElement);
const { animateTextSlideIn, animateTextSlideOut } =
  useTextSlideAnimations(textButtonElement);

onMounted(() => {
  if (notreElement.value) {
    gsap.from(notreElement.value, { y: -50, duration: 1 });
  }
});
</script>

<style scoped>
.bg-dots {
  background-image: radial-gradient(
    rgba(223, 70, 62, 0.15) 3px,
    transparent 1px
  );
  background-size: 20px 20px;
}
</style>
