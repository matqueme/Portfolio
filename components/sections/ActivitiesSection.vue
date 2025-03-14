<template>
  <div class="section-color bg-[#F0EBE3] text-black">
    <div class="section z-10 text-center">
      <h2>Nos <span class="text-(--color-custom-red)">métiers</span></h2>
      <p class="mt-2">
        Nous concevons des sites web modernes et optimisés, alliant design
        soigné, visibilité sur Google et stratégie digitale efficace.
      </p>

      <div
        class="relative grid grid-cols-1 items-stretch justify-center gap-16 py-16 lg:grid-cols-3 lg:gap-30"
      >
        <div ref="cornerLeft" class="absolute top-8 left-0 h-18 w-18">
          <SvgoCorner
            class="stroke-black stroke-6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </div>

        <div ref="cornerRight" class="absolute right-0 bottom-8 h-18 w-18">
          <SvgoCorner
            class="rotate-180 stroke-(--color-custom-red) stroke-6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </div>

        <div
          v-for="(plan, index) in plans"
          :key="index"
          class="flex flex-col items-center"
        >
          <component
            :is="icons[index]"
            :size="48"
            :class="
              index === 1 ? `text-(--color-custom-red) lg:mt-12` : `text-black`
            "
          />
          <h5 v-html="plan.title" class="mt-6" />
          <p class="mt-4 text-center">{{ plan.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-expect-error - Ignore Because import in nuxt-phosphor-icon
import { PhDeviceMobile, PhPalette, PhMegaphone } from '@phosphor-icons/vue';
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

const cornerLeft = ref<HTMLElement | null>(null);
const cornerRight = ref<HTMLElement | null>(null);

const icons = [PhDeviceMobile, PhPalette, PhMegaphone];

interface PlanProps {
  title: string;
  description: string;
}

const plans: PlanProps[] = [
  {
    title: 'Création de site web & SEO',
    description:
      'Conception de sites web modernes, rapides et optimisés pour le référencement. Nous assurons une structure technique propre, une navigation fluide et un contenu optimisé pour maximiser votre visibilité sur Google.',
  },
  {
    title:
      ' Identité visuelle & expérience utilisateur (<span class="text-(--color-custom-red)">UI/UX</span>)',
    description:
      'Un design sur mesure qui reflète votre image de marque avec des couleurs, typographies et mises en page adaptées. Nous accordons une attention particulière à l’ergonomie pour garantir une expérience utilisateur intuitive et engageante.',
  },
  {
    title: 'Stratégie digitale & communication',
    description:
      'Accompagnement dans la mise en place d’une présence en ligne efficace : création de contenus impactants, conseils en communication digitale et intégration des outils essentiels (réseaux sociaux, call-to-action, formulaires…).',
  },
];

const animateTopLeftCorner = () => {
  gsap.fromTo(
    cornerLeft.value,
    { x: -150, y: -150, opacity: 0 },
    {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 2,
      ease: 'power2.out',
    }
  );
};

const animateBottomRightCorner = () => {
  gsap.fromTo(
    cornerRight.value,
    { x: 100, y: 100, opacity: 0 },
    {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 2,
      ease: 'power2.out',
    }
  );
};

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('intersecting');
          animateTopLeftCorner();
          animateBottomRightCorner();
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  if (cornerLeft.value) {
    observer.observe(cornerLeft.value);
  }
});
</script>
