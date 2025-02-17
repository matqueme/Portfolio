<template>
  <div
    ref="container"
    class="bg-dots section-color min-h-screen overflow-hidden bg-(--color-custom-beige)"
  >
    <div class="section relative items-center gap-6 md:flex md:flex-row">
      <div class="w-full text-center md:w-1/2 md:text-left">
        <h1 ref="title">
          Bienvenue dans
          <div
            @mouseenter="animateTextTurnIn"
            @mouseleave="animateTextTurnOut"
            class="inline-block"
          >
            <span
              ref="notreElement"
              class="inline-block text-(--color-custom-red)"
            >
              notre
            </span>
          </div>
          univers
        </h1>
        <h6 ref="subtitle">
          Nous concevons des expériences web où l'élégance intemporelle
          rencontre la précision du digital. Chaque projet est une fusion d’art
          et de technologie, pensée pour marquer les esprits.
        </h6>
        <div
          class="mt-8 flex flex-col items-center gap-4 md:items-start lg:flex-row"
        >
          <button
            ref="contactButton"
            class="overflow-hidden rounded-full bg-(--color-custom-red) px-6 py-3 text-xl font-bold text-white hover:cursor-pointer"
            @mouseenter="animateTextSlideIn"
            @mouseleave="animateTextSlideOut"
          >
            <span ref="textButtonElement" class="flex"> Contactez-nous </span>
          </button>
          <button
            ref="projectsButton"
            style="overflow-clip-margin: 1px"
            class="relative flex items-center justify-center overflow-clip rounded-full border-2 border-(--color-custom-red) px-6 py-3 text-xl font-bold text-(--color-custom-red) hover:cursor-pointer"
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
      <div class="relative mt-8 mb-8 w-full md:mt-0 md:w-1/2">
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
        <div class="absolute right-0 -bottom-15">
          <div class="mb-4 flex flex-row gap-4">
            <div
              ref="secondLine"
              class="h-1 w-16 origin-right rounded-full bg-(--color-custom-red) sm:w-24 lg:w-24"
            />
            <div
              ref="firstLine"
              class="h-1 w-32 origin-right rounded-full bg-(--color-custom-red) sm:w-48 lg:w-56"
            />
          </div>
        </div>
      </div>
      <Star
        class="absolute -bottom-45 left-20 h-16 w-16 opacity-25 md:h-20 md:w-20 lg:h-24 lg:w-24"
      />
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
const firstLine = ref<HTMLElement | null>(null);
const secondLine = ref<HTMLElement | null>(null);

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

  if (firstLine.value && secondLine.value) {
    gsap.fromTo(
      firstLine.value,
      { scaleX: 0 },
      { scaleX: 1, duration: 1, ease: 'power2.inOut' }
    );
    gsap.fromTo(
      secondLine.value,
      { scaleX: 0 },
      { scaleX: 1, duration: 1, ease: 'power2.inOut', delay: 0.9 }
    );
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
