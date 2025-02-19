<template>
  <div
    v-show="showNav"
    class="bg-opacity-70 fixed top-0 left-0 z-100 w-full bg-white/20 shadow-lg backdrop-blur-3xl"
  >
    <nav class="flex items-center justify-between px-4 py-2 backdrop-blur-md">
      <div class="flex items-center gap-4">
        <NuxtImg
          src="/images/icon.png"
          alt="M&Q Agence"
          class="h-12 w-12 rounded-full"
        />
        <h1 class="stroke-bold text-xl text-(--color-custom-red)">
          M&Q Agence
        </h1>
      </div>
      <div class="flex items-center gap-4">
        <a
          class="font-bold text-(--color-custom-red) hover:cursor-pointer hover:text-black"
          @click="scrollToSection('projectsSection')"
          >Projets</a
        >
        <a
          class="font-bold text-(--color-custom-red) hover:cursor-pointer hover:text-black"
          @click="scrollToSection('offersSection')"
          >Nos offres</a
        >
        <button
          ref="contactButton"
          class="overflow-hidden rounded-full bg-(--color-custom-red) px-6 py-2 text-sm font-bold text-white hover:cursor-pointer"
          @mouseenter="animateTextSlideIn"
          @mouseleave="animateTextSlideOut"
          @click="scrollToSection('formComponent')"
        >
          <span ref="textButtonElement" class="flex"> Contactez-nous </span>
        </button>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';

import { useTextSlideAnimations } from '@/composables/animations';

const textButtonElement = ref<HTMLElement | null>(null);
const { animateTextSlideIn, animateTextSlideOut } =
  useTextSlideAnimations(textButtonElement);

const showNav = ref(false);

const handleScroll = async () => {
  if (window.scrollY > 0) {
    if (!showNav.value) {
      gsap.to('.fixed', { y: 0, duration: 0.5 });
      showNav.value = true;
    }
  } else {
    if (showNav.value) {
      gsap.to('.fixed', { y: -100, duration: 0.5 });
      await new Promise((resolve) => setTimeout(resolve, 500));
      showNav.value = false;
    }
  }
};

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
.stroke-bold {
  -webkit-text-stroke: 1px var(--color-custom-red);
}
</style>
