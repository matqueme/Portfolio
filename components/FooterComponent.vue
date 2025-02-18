<template>
  <footer
    class="relative overflow-hidden bg-black py-8 text-center text-white"
    ref="footer"
    @mousemove="animateFooter"
    @mouseleave="removeBubble"
  >
    <div
      class="pointer-events-none absolute z-0 h-12 w-12 scale-0 rounded-full bg-(--color-custom-red) blur-xl"
      ref="bubble"
    ></div>
    <div
      class="absolute top-8 right-8 z-10 flex items-center justify-center gap-4"
    >
      <div
        class="h-1 w-32 rounded-full bg-(--color-custom-red)"
        ref="decorativeDash"
      ></div>
      <div class="h-2 w-2 rounded-full bg-(--color-custom-red)"></div>
      <div class="h-2 w-2 rounded-full bg-(--color-custom-red)"></div>
    </div>
    <div class="z-10 flex flex-col items-center gap-4">
      <p class="font-decorative stroke-bold text-3xl text-(--color-custom-red)">
        M&Q
      </p>
      <div class="flex flex-col items-center gap-2">
        <p>© 2025 - M&Q - Tous droits réservés</p>
        <p>
          <a
            href="#"
            class="opacity-50"
            ref="legalLink"
            @mouseover="animateLink"
            @mouseleave="resetLink"
            >Mentions légales</a
          >
        </p>
        <p>
          <a
            href="mailto:contact@mq.com"
            class="opacity-50"
            ref="emailLink"
            @mouseover="animateLink"
            @mouseleave="resetLink"
            >contact@mq.com</a
          >
          <span class="opacity-50"> | </span>
          <a
            href="tel:+33123456789"
            class="opacity-50"
            ref="phoneLink"
            @mouseover="animateLink"
            @mouseleave="resetLink"
            >+33 1 23 45 67 89</a
          >
        </p>
      </div>
      <div class="flex justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/quentin-simler/"
          target="_blank"
          rel="noopener noreferrer"
          ref="linkedin1"
          @mouseover="animateIcon"
          @mouseleave="resetIcon"
        >
          <PhosphorIconLinkedinLogo class="h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/mathis-quemener"
          target="_blank"
          rel="noopener noreferrer"
          ref="linkedin2"
          @mouseover="animateIcon"
          @mouseleave="resetIcon"
        >
          <PhosphorIconLinkedinLogo class="h-6 w-6" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const footer = ref<HTMLElement | null>(null);
const bubble = ref<HTMLElement | null>(null);
const legalLink = ref<HTMLElement | null>(null);
const emailLink = ref<HTMLElement | null>(null);
const phoneLink = ref<HTMLElement | null>(null);
const linkedin1 = ref<HTMLElement | null>(null);
const linkedin2 = ref<HTMLElement | null>(null);
const decorativeDash = ref<HTMLElement | null>(null);

const animateLink = (event: { target: gsap.TweenTarget }) => {
  gsap.to(event.target, {
    duration: 0.3,
    opacity: 1,
    y: 0,
    ease: 'power3.out',
  });
};

const resetLink = (event: { target: gsap.TweenTarget }) => {
  gsap.to(event.target, {
    duration: 0.3,
    opacity: 0.5,
    y: 10,
    ease: 'power3.out',
  });
};

const animateFooter = (event: MouseEvent) => {
  const { clientX, clientY } = event;
  const { top, left } = footer.value?.getBoundingClientRect() || {
    top: 0,
    left: 0,
  };

  gsap.to(bubble.value, {
    duration: 0.4,
    x: clientX - left - 25,
    y: clientY - top - 50,
    scale: 1,
    opacity: 1,
    zIndex: 1,
    ease: 'power2.out',
  });
};

const removeBubble = () => {
  gsap.to(bubble.value, {
    duration: 0.4,
    scale: 0,
    opacity: 0,
    ease: 'power2.out',
  });
};

// Animation des icônes au hover
const animateIcon = (event: MouseEvent) => {
  gsap.to(event.currentTarget, {
    duration: 0.3,
    scale: 1.2,
    y: -4,
    ease: 'power3.out',
  });
};

// Réinitialisation de l'animation des icônes
const resetIcon = (event: MouseEvent) => {
  gsap.to(event.currentTarget, {
    duration: 0.3,
    scale: 1,
    y: 0,
    ease: 'power3.out',
  });
};

// Animation du tiret décoratif
const animateDecorativeDash = () => {
  gsap.fromTo(
    decorativeDash.value,
    {
      width: 0,
    },
    {
      duration: 1,
      width: '8rem',
      ease: 'power3.inOut',
    }
  );
};

onMounted(() => {
  animateDecorativeDash();
});
</script>

<style scoped>
.stroke-bold {
  -webkit-text-stroke: 1px var(--color-custom-red);
}
</style>
