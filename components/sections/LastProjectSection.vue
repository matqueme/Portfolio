<template>
  <div
    class="section-color relative overflow-hidden bg-[#F0EBE3]"
    id="contactSection"
  >
    <div class="section relative z-10 text-left">
      <h2>
        Nos derniers projets
        <span class="text-(--color-custom-red)">réalisés</span>
      </h2>
      <div
        class="absolute top-40 right-6 z-0 hidden h-10 w-18 opacity-25 lg:block"
      >
        <div class="relative">
          <SvgoStar class="absolute right-0 bottom-0 h-14 w-14" />
          <SvgoStar class="absolute -top-4 left-0 h-8 w-8" />
        </div>
      </div>
      <p class="mt-2">
        Découvrez les sites que nous avons bâtis avec soin, alliant design
        moderne et performance technique.
      </p>
      <div class="mt-8 mb-4 flex flex-row gap-4">
        <div
          ref="firstLine"
          class="h-1 w-32 origin-left rounded-full bg-(--color-custom-red) opacity-0 sm:w-48 lg:w-56"
        />
        <div
          ref="secondLine"
          class="h-1 w-16 origin-left rounded-full bg-(--color-custom-red) opacity-0 sm:w-24 lg:w-24"
        />
      </div>
      <div
        class="grid grid-cols-1 items-stretch justify-center gap-10 pt-16 md:grid-cols-2"
      >
        <ProjectCard
          title="Débarras Breton"
          description="Site vitrine pour une entreprise de débarras en Bretagne."
          image="/images/debarrasbreton.webp"
          link="https://www.debarrasbreton.fr"
        />

        <ProjectCard
          title="Greet Hotel Brest"
          description="Site vitrine & réservation pour un hôtel à Brest."
          image="/images/Greet-Hotel-Brest.webp"
          link="https://www.google.com"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import ProjectCard from '../ProjectCard.vue';

const firstLine = ref<HTMLElement | null>(null);
const secondLine = ref<HTMLElement | null>(null);

const animateLines = () => {
  if (firstLine.value && secondLine.value) {
    gsap.fromTo(
      firstLine.value,
      { scaleX: 0, opacity: 1 },
      { scaleX: 1, duration: 1, ease: 'power2.inOut' }
    );
    gsap.fromTo(
      secondLine.value,
      { scaleX: 0, opacity: 1 },
      { scaleX: 1, duration: 1, ease: 'power2.inOut', delay: 0.9 }
    );
  }
};

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateLines();
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  if (firstLine.value) {
    observer.observe(firstLine.value);
  }
  if (secondLine.value) {
    observer.observe(secondLine.value);
  }
});
</script>
