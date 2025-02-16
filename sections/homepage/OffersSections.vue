<template>
  <div class="bg-black">
    <h2 class="pt-10 pb-5 text-center font-[gebuk] text-5xl text-white">
      Nos <span class="text-red-500">plans</span> pour vous
    </h2>
    <h5 class="text-center font-[TitilliumWeb-Regular] text-xl text-white">
      Construisons ensemble les fondations de votre présence en ligne
    </h5>
    <div
      class="flex flex-col items-center justify-center space-y-4 px-4 py-20 md:flex-row md:space-y-0 md:space-x-4 md:px-8"
    >
      <OfferCard v-for="(plan, index) in plans" :key="index" v-bind="plan" />
    </div>
  </div>
</template>

<script setup lang="ts">
import OfferCard from '~/components/OfferCard.vue';
const plans = [
  {
    title: 'Plan Starter',
    description:
      'Parfait pour les petits projets ou les entrepreneurs qui souhaitent démarrer ou refaire leur site.',
    features: [
      'Audit, conseils et discussion du projet (Gratuit)',
      'Site vitrine (1 à 5 pages)',
      'Design responsive (mobile, tablette, ordinateur)',
      'Intégration de base SEO (référencement naturel Google)',
      'Formulaire de contact',
      'Hébergement et nom de domaine (en option)',
      'Livraison à partir de 2 semaines',
    ],
    price: 'À partir de 1200 €',
  },
  {
    title: 'Plan Pro',
    description:
      'Idéal pour les entreprises qui souhaitent une présence en ligne plus complète.',
    features: [
      'Audit, conseils et discussion du projet',
      'Site web jusqu’à 10 pages',
      'Design personnalisé et expérience utilisateur optimisée',
      'Intégration SEO avancée',
      'Gestion de la communication (Carte de visite, réseaux sociaux...)',
      'Fonctionnalités complexes (blog, gestion d’événements, etc.)',
      'Support technique (2 mois offerts)',
      'Hébergement et nom de domaine (en option)',
      'Livraison en 3 à 6 semaines',
    ],
    price: 'À partir de 2000 €',
  },
  {
    title: 'Plan Sur Mesure',
    description:
      'Pour les projets complexes et uniques, nécessitant une approche 100 % personnalisée.',
    features: [
      'Audit, conseils et discussion du projet',
      'Site ou application web entièrement adapté à vos besoins',
      'Design unique et expérience utilisateur premium',
      'Développement de fonctionnalités spécifiques (réservations, paiements, connexion, etc.)',
      'Référencement SEO complet et optimisation des performances',
      'Maintenance et support technique inclus (6 mois)',
      'Aide à la gestion de la communication (Carte de visite, réseaux sociaux...)',
      'Délai variable selon le projet',
    ],
    price: 'Sur devis (Devis gratuit)',
  },
];
</script>
