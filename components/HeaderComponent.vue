<template>
  <header
    role="banner"
    ref="header"
    v-show="showNav"
    class="bg-opacity-70 fixed top-0 left-0 z-100 w-full bg-white/20 shadow-lg backdrop-blur-3xl"
  >
    <nav
      class="flex items-center justify-between px-4 py-2 backdrop-blur-md"
      role="navigation"
    >
      <div
        class="flex items-center gap-4 hover:cursor-pointer"
        @click="router.push('/')"
      >
        <NuxtImg
          src="/images/icon.png"
          alt="Studio Q&M"
          class="h-12 w-12 rounded-full"
        />
        <h2 class="stroke-bold text-xl text-(--color-custom-red)">
          Studio Q&M
        </h2>
      </div>
      <div class="flex items-center gap-4">
        <a
          href="#projectsSection"
          class="hidden font-bold text-(--color-custom-red) hover:cursor-pointer hover:text-black sm:block"
          aria-label="Projets"
          >Projets</a
        >
        <a
          href="#offersSection"
          class="hidden font-bold text-(--color-custom-red) hover:cursor-pointer hover:text-black sm:block"
          aria-label="Offres"
          >Nos offres</a
        >
        <button
          @click="router.push('/#contactSection')"
          ref="contactButton"
          class="overflow-hidden rounded-full bg-(--color-custom-red) px-6 py-2 text-sm font-bold text-white hover:cursor-pointer"
          @mouseenter="animateTextSlideIn"
          @mouseleave="animateTextSlideOut"
        >
          <span ref="textButtonElement" class="flex"> Contactez-nous </span>
        </button>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { useRouter } from 'vue-router';

import { useTextSlideAnimations } from '@/composables/animations';

const textButtonElement = ref<HTMLElement | null>(null);
const { animateTextSlideIn, animateTextSlideOut } =
  useTextSlideAnimations(textButtonElement);

const showNav = ref(false);
const router = useRouter();
const header = ref<HTMLElement | null>(null);

const handleScroll = async () => {
  if (window.scrollY > 0) {
    if (!showNav.value) {
      gsap.to(header.value, { y: 0, duration: 0.5 });
      showNav.value = true;
    }
  } else {
    if (showNav.value) {
      gsap.to(header.value, { y: -100, duration: 0.5 });
      await new Promise((resolve) => setTimeout(resolve, 500));
      showNav.value = false;
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  if (window.scrollY > 0) {
    gsap.to(header.value, { y: 0, duration: 0.5 });
    showNav.value = true;
  }
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
