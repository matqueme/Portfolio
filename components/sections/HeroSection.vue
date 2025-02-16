<template>
  <div
    ref="container"
    class="bg-dots flex h-screen items-center justify-center bg-[#F0EBE3]"
  >
    <div
      class="flex max-w-screen-2xl flex-col items-center justify-between gap-6 px-16 py-8 md:flex-row"
    >
      <div class="w-full md:w-1/2">
        <h1 ref="title" class="font-[gebuk] text-6xl">
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
        <div
          class="mt-8 flex flex-col items-center gap-4 md:items-start lg:flex-row"
        >
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
            style="overflow-clip-margin: 1px"
            class="relative flex items-center justify-center overflow-clip rounded-full border-2 border-[#DF463E] px-6 py-3 font-[TitilliumWeb-SemiBold] text-xl text-[#DF463E] hover:cursor-pointer"
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
      <div class="relative mt-8 w-full md:mt-0 md:w-1/2">
        <NuxtImg
          src="/images/Notre-Dame-De-Paris.png"
          alt="Notre-Dame de Paris"
          class="h-auto w-full max-w-full overflow-hidden rounded-xl object-contain"
        />
        <div class="absolute top-0 right-0 opacity-25">
          <div class="relative m-4 h-14 w-14 md:h-16 md:w-16 lg:h-22 lg:w-22">
            <!-- Petites étoiles -->
            <div class="absolute top-6 left-0 md:top-8 lg:top-10">
              <div class="relative">
                <!-- Étoile 1 -->
                <Star
                  class="absolute top-0 left-0 h-6 w-6 md:h-6 md:w-6 lg:h-8 lg:w-8"
                />
                <!-- Étoile 2 -->
                <Star
                  class="absolute top-5 left-5 h-4 w-4 md:h-5 md:w-5 lg:top-8 lg:left-6 lg:h-6 lg:w-6"
                />
              </div>
            </div>
            <!-- Grande étoile -->
            <Star
              class="absolute top-0 right-0 h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import {
  useTextTurnAnimations,
  useButtonCircleAnimations,
  useTextSlideAnimations,
} from '@/composables/animations';
import Star from '@/assets/icons/Star.svg';

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
