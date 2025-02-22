<template>
  <main class="page-container" role="main">
    <HeroSection />
    <ActivitiesSection />
    <WhoSection />
    <OffersSections />
    <LastProjectSection />
    <ToolsSection />
    <ContactSection />
  </main>
</template>

<script setup lang="ts">
import { useHead } from '#imports';
import HeroSection from '@/components/sections/HeroSection.vue';
import ActivitiesSection from '~/components/sections/ActivitiesSection.vue';
import OffersSections from '@/components/sections/OffersSections.vue';
import WhoSection from '~/components/sections/WhoSection.vue';
import LastProjectSection from '@/components/sections/LastProjectSection.vue';
import ToolsSection from '~/components/sections/ToolsSection.vue';
import ContactSection from '~/components/sections/ContactSection.vue';

useHead({
  title: 'Studio Q&M - Création de Sites Web sur Mesure à Brest',
  meta: [
    {
      name: 'description',
      content:
        'Studio Q&M, spécialiste en création de sites web à Brest. Développement de sites internet sur mesure, référencement naturel (SEO) et solutions adaptées à toutes les tailles de projets.',
    },
    {
      name: 'keywords',
      content:
        'création site web, agence web Brest, développement site internet, référencement naturel, SEO, site web sur mesure, agence digitale, webdesign, webmarketing, studio Q&M',
    },
    {
      name: 'author',
      content: 'Studio Q&M',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    // Open Graph (pour les réseaux sociaux)
    {
      property: 'og:title',
      content: 'Studio Q&M - Création de Sites Web sur Mesure à Brest',
    },
    {
      property: 'og:description',
      content:
        'Studio Q&M, spécialiste en création de sites web à Brest. Développement de sites internet sur mesure, référencement naturel (SEO) et solutions adaptées à toutes les tailles de projets.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://www.studio-qm.fr', // Remplacez par l'URL de votre site
    },
    {
      property: 'og:image',
      content: 'https://www.studio-qm.fr/images/logo.png', // Remplacez par l'URL de votre image
    },
    {
      property: 'og:site_name',
      content: 'Studio Q&M',
    },
    // Twitter Card (optionnel)
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Studio Q&M - Création de Sites Web sur Mesure à Brest',
    },
    {
      name: 'twitter:description',
      content:
        'Studio Q&M, spécialiste en création de sites web à Brest. Développement de sites internet sur mesure, référencement naturel (SEO) et solutions adaptées à toutes les tailles de projets.',
    },
    {
      name: 'twitter:image',
      content: 'https://www.studio-qm.fr/images/logo.png', // Remplacez par l'URL de votre image
    },
    {
      name: 'twitter:site',
      content: '@StudioQM', // Remplacez par votre handle Twitter si vous en avez un
    },
  ],
  htmlAttrs: {
    lang: 'fr',
    dir: 'ltr',
    class: 'scroll-smooth',
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://www.studio-qm.fr', // Remplacez par l'URL canonique de votre site
    },
  ],
});
</script>
