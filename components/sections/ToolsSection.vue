<template>
  <div class="section-color relative bg-(--color-custom-beige)">
    <div class="section flex flex-col items-center gap-10 md:flex-row">
      <div class="mb-10 w-full text-left md:mb-0 md:w-1/2">
        <h2 class="mb-10">
          Nos
          <span
            ref="animatedText"
            class="inline-block text-(--color-custom-red)"
            @mouseenter="handleTextMouseEnter"
            @mouseleave="handleTextMouseLeave"
          >
            différents</span
          >
          outils pour réaliser vos projets
        </h2>
        <p>
          Des technologies de pointe pour des sites web bâtis sur des bases
          solides.
        </p>
      </div>
      <div
        ref="parent"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        class="bg-dots relative flex min-h-82 w-full items-center justify-center md:w-1/2"
      >
        <div class="relative h-full w-full">
          <div
            v-for="(icon, index) in iconsConfig"
            :key="index"
            :ref="(el) => setIconRef(el as HTMLElement, index)"
            :class="icon.class"
          >
            <component :is="icon.component" class="h-16 w-16" />
          </div>
        </div>
        <div class="absolute top-0 -left-5 z-0 h-14 w-14 opacity-25">
          <SvgoStar class="h-14 w-14" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { gsap } from 'gsap';

const iconsConfig = [
  { component: 'SvgoToolsLogoPhotoshop', class: 'absolute top-10 left-20' },
  { component: 'SvgoToolsLogoNuxt', class: 'absolute top-1/3 right-12' },
  { component: 'SvgoToolsLogoTailwind', class: 'absolute bottom-5 left-15' },
  { component: 'SvgoToolsLogoFirebase', class: 'absolute right-25 bottom-10' },
  {
    component: 'SvgoToolsLogoFigma',
    class: 'absolute top-1/2 right-1/2 hidden sm:block',
  },
  {
    component: 'SvgoToolsLogoVercel',
    class: 'absolute bottom-15 left-55 hidden sm:block md:hidden lg:block',
  },
  {
    component: 'SvgoToolsLogoNode',
    class: 'absolute top-15 right-45 hidden sm:block md:hidden lg:block',
  },
];

const icons = ref<(HTMLElement | null)[]>([]);
const animations = ref<gsap.core.Tween[]>([]);
const animatedText = ref<HTMLElement | null>(null);

const setIconRef = (el: Element | null, index: number) => {
  icons.value[index] = el as HTMLElement;
};

const handleMouseEnter = () => {
  animations.value = icons.value
    .map((icon) => {
      if (icon) {
        return gsap.to(icon, {
          duration: 0.5,
          x: Math.random() * 20 - 10,
          y: Math.random() * 20 - 10,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
      }
      return null;
    })
    .filter(Boolean) as gsap.core.Tween[];
};

const handleMouseLeave = () => {
  animations.value.forEach((animation) => {
    animation.kill();
  });
  animations.value = [];
  icons.value.forEach((icon) => {
    if (icon) {
      gsap.to(icon, {
        x: 0,
        y: 0,
        clearProps: 'all',
        duration: 0.5,
        ease: 'power1.inOut',
      });
    }
  });
};

const handleTextMouseEnter = () => {
  if (animatedText.value) {
    gsap.to(animatedText.value, {
      scale: 1.2,
      rotation: 10,
      duration: 0.5,
      ease: 'power1.out',
    });
  }
};

const handleTextMouseLeave = () => {
  if (animatedText.value) {
    gsap.to(animatedText.value, {
      scale: 1,
      rotation: 0,
      duration: 0.5,
      ease: 'power1.out',
    });
  }
};
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
