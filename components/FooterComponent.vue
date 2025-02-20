<template>
  <footer
    class="relative overflow-hidden bg-black py-8 text-center text-white"
    ref="footer"
    role="contentinfo"
    @mousemove="animateFooter"
    @mouseleave="removeBubble"
  >
    <div class="z-10 flex flex-col items-center gap-4">
      <p
        class="font-decorative stroke-bold z-10 text-3xl text-(--color-custom-red) select-none hover:cursor-pointer"
        ref="textDecorative"
        @click="triggerConfetti"
      >
        Q&M
      </p>
      <div class="flex flex-col items-center gap-2">
        <p>© 2025 - Q&M - Tous droits réservés</p>
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
            >07 68 08 16 84</a
          >
        </p>
      </div>
      <div class="flex justify-center gap-4">
        <div class="relative flex">
          <a
            href="https://www.linkedin.com/in/quentin-simler/"
            target="_blank"
            aria-label="LinkedIn de Quentin Simler"
            rel="noopener noreferrer"
            ref="linkedin1"
            @mouseenter="animateIcon"
            @mouseleave="resetIcon"
          >
            <PhosphorIconLinkedinLogo class="h-6 w-6" />
          </a>
          <div
            ref="tooltip1"
            class="absolute bottom-8 left-1/2 mb-2 w-max -translate-x-1/2 scale-90 transform rounded-lg bg-black px-2 py-1 text-xs text-white opacity-0 shadow-lg"
          >
            LinkedIn de Quentin Simler
          </div>
        </div>

        <div class="relative flex">
          <a
            href="https://www.linkedin.com/in/mathis-quemener"
            target="_blank"
            aria-label="LinkedIn de Mathis Quemener"
            rel="noopener noreferrer"
            ref="linkedin2"
            @mouseenter="animateIcon"
            @mouseleave="resetIcon"
          >
            <PhosphorIconLinkedinLogo class="h-6 w-6" />
          </a>
          <div
            ref="tooltip2"
            class="absolute bottom-8 left-1/2 mb-2 w-max -translate-x-1/2 scale-100 transform rounded-lg bg-black px-2 py-1 text-xs text-white opacity-0 shadow-lg"
          >
            LinkedIn de Mathis Quemener
          </div>
        </div>
      </div>
    </div>
    <div
      class="pointer-events-none absolute z-0 h-12 w-12 scale-0 rounded-full bg-(--color-custom-red) blur-xl"
      ref="bubble"
    ></div>
    <div
      class="absolute top-8 right-8 z-10 flex items-center justify-center gap-4"
    >
      <div
        class="h-2 w-2 origin-right rounded-full bg-(--color-custom-red) opacity-0 sm:h-1 sm:w-16 lg:w-32"
        ref="decorativeDash"
      />
      <div class="h-2 w-2 rounded-full bg-(--color-custom-red)" />
      <div
        class="hidden h-2 w-2 rounded-full bg-(--color-custom-red) sm:block"
      />
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
const tooltip1 = ref<HTMLElement | null>(null);
const tooltip2 = ref<HTMLElement | null>(null);
const textDecorative = ref<HTMLElement | null>(null);

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
  const target = event.currentTarget as HTMLElement;
  gsap.to(target, {
    duration: 0.3,
    scale: 1.2,
    y: -4,
    ease: 'power3.out',
  });

  const tooltip = target.nextElementSibling as HTMLElement;
  gsap.fromTo(
    tooltip,
    {
      y: 10,
      opacity: 0,
    },
    {
      duration: 0.3,
      y: 0,
      opacity: 1,
      ease: 'power3.out',
    }
  );
};

// Réinitialisation de l'animation des icônes
const resetIcon = (event: MouseEvent) => {
  const target = event.currentTarget as HTMLElement;
  gsap.to(target, {
    duration: 0.3,
    scale: 1,
    y: 0,
    ease: 'power3.out',
  });

  const tooltip = target.nextElementSibling as HTMLElement;
  gsap.to(tooltip, {
    duration: 0.3,
    y: 10,
    opacity: 0,
    ease: 'power3.out',
  });
};

// Animation du tiret décoratif
const animateDecorativeDash = () => {
  gsap.fromTo(
    decorativeDash.value,
    { scaleX: 0, opacity: 1 },
    { scaleX: 1, duration: 1, ease: 'power2.inOut' }
  );
};

const triggerConfetti = () => {
  const tl = gsap.timeline();

  // Animation du texte avant les confettis
  tl.to(textDecorative.value, { scale: 1.1, duration: 0.3 }).to(
    textDecorative.value,
    { scale: 1, duration: 0.2 }
  );

  // Obtenir la position de l'élément de texte
  if (!textDecorative.value) return;
  const rect = textDecorative.value.getBoundingClientRect();

  const adjustedTop = rect.top + window.scrollY;

  // Animation des confettis
  const confettiCount = 50;
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'absolute';
    confetti.style.width = '5px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = `hsl(${Math.random() * 30}, 100%, 50%)`;
    confetti.style.top = `${adjustedTop + rect.height / 2}px`;
    confetti.style.left = `${rect.left + rect.width / 2}px`;
    confetti.style.zIndex = '0';
    document.body.appendChild(confetti);
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * 200;
    gsap.to(confetti, {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      opacity: 0,
      rotation: Math.random() * 360,
      duration: 2,
      zIndex: 0,
      onComplete: () => {
        document.body.removeChild(confetti);
      },
    });
  }
};

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateDecorativeDash();
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );
  if (decorativeDash.value) {
    observer.observe(decorativeDash.value);
  }
});
</script>

<style scoped>
.stroke-bold {
  -webkit-text-stroke: 1px var(--color-custom-red);
}
</style>
