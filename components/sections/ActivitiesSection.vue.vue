<template>
  <div class="section-color bg-[#F0EBE3] text-black">
    <div class="section z-10 text-center">
      <h2>Nos <span class="text-(--color-custom-red)">métiers</span></h2>
      <p class="mt-2">
        Nous concevons des sites web modernes et optimisés, alliant design
        soigné, visibilité sur Google et stratégie digitale efficace.
      </p>

      <div
        class="grid grid-cols-1 items-stretch justify-center gap-10 pt-16 lg:grid-cols-3"
      >
        <div
          v-for="(plan, index) in plans"
          :key="index"
          class="flex flex-col items-center"
        >
          <component
            :is="icons[index]"
            :size="48"
            :class="index === 1 ? `text-(--color-custom-red)` : `text-black`"
          />
          <h5 v-html="plan.title" class="mt-4" />
          <p class="mt-2 text-center">{{ plan.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhDeviceMobile, PhPalette, PhMegaphone } from '@phosphor-icons/vue';
const icons = [PhDeviceMobile, PhPalette, PhMegaphone];

interface PlanProps {
  title: string;
  description: string;
}

const plans: PlanProps[] = [
  {
    title: 'Création de site web & SEO',
    description:
      'Conception de sites web modernes, rapides et optimisés pour le référencement. J’assure une structure technique propre, une navigation fluide et un contenu optimisé pour maximiser votre visibilité sur Google.',
  },
  {
    title:
      ' Identité visuelle & expérience utilisateur (<span class="text-(--color-custom-red)">UI/UX</span>)',
    description:
      'Un design sur mesure qui reflète votre image de marque avec des couleurs, typographies et mises en page adaptées. J’accorde une attention particulière à l’ergonomie pour garantir une expérience utilisateur intuitive et engageante.',
  },
  {
    title: 'Stratégie digitale & communication',
    description:
      'Accompagnement dans la mise en place d’une présence en ligne efficace : création de contenus impactants, conseils en communication digitale et intégration des outils essentiels (réseaux sociaux, call-to-action, formulaires…).',
  },
];
</script>
