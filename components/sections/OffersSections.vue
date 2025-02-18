<template>
  <div class="section-color relative overflow-hidden bg-black text-white">
    <div class="section z-10 text-center">
      <h2>
        Nos
        <div @mouseenter="animateTextExplode" class="inline-block">
          <span
            ref="notreElement"
            class="inline-block text-(--color-custom-red)"
            >plans</span
          >
        </div>
        pour vous
      </h2>
      <p class="mt-2">
        Construisons ensemble les fondations de votre présence en ligne
      </p>
      <div
        ref="cardsContainer"
        class="grid grid-cols-1 items-stretch justify-center gap-10 pt-16 lg:grid-cols-3"
      >
        <OfferCard
          v-for="(plan, index) in plans"
          :key="index"
          v-bind="plan"
          class="opacity-0"
          :class="{ 'md:scale-105': index === 1 }"
        />
      </div>
    </div>
    <SvgoPlanNotreDameDeParis
      class="absolute top-50 left-1/2 z-0 h-full w-[350%] -translate-x-1/2 rotate-90 transform bg-contain bg-center bg-no-repeat opacity-25 sm:w-[280%] md:w-[200%] lg:w-[85%] lg:rotate-0"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import OfferCard from '@/components/OfferCard.vue';

const notreElement = ref<HTMLElement | null>(null);

interface PlanProps {
  title: string;
  description: string;
  features: string[];
  price: string;
}

const plans: PlanProps[] = [
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
    price: 'à partir de <span class="text-xl font-semibold">1200 €</span>',
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
    price: 'à partir de <span class="text-xl font-semibold">2000 €</span>',
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
    price:
      '<span class="text-xl font-semibold">Sur devis</span> (Devis gratuit)',
  },
];

const cardsContainer = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!cardsContainer.value) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            entry.target.children,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.3,
              duration: 0.6,
              ease: 'power2.out',
            }
          );
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(cardsContainer.value);

  // Cleanup observer on unmount
  return () => {
    observer.disconnect();
  };
});

// const animateTextShake = () => {
//   console.log('shake');
//   if (notreElement.value) {
//     gsap.to(notreElement.value, {
//       x: 10, // Déplace légèrement le texte sur l'axe X
//       yoyo: true,
//       repeat: 3, // Répète l'effet 3 fois
//       duration: 0.1,
//       ease: 'power1.out',
//     });
//   }
// };

// const resetTextShake = () => {
//   if (notreElement.value) {
//     gsap.to(notreElement.value, {
//       x: 0, // Réinitialise la position
//       duration: 0.3,
//       ease: 'power1.out',
//     });
//   }
// };

// const animateTextGlitch = () => {
//   if (notreElement.value) {
//     gsap.to(notreElement.value, {
//       x: () => gsap.utils.random(-5, 5), // Déplacement aléatoire sur l'axe X
//       y: () => gsap.utils.random(-5, 5), // Déplacement aléatoire sur l'axe Y
//       color: () => gsap.utils.random(['#ff0000', '#00ff00', '#0000ff']), // Changement de couleur aléatoire
//       duration: 0.1,
//       repeat: 10, // Répète l'animation 10 fois
//       yoyo: true,
//       ease: 'power1.inOut',
//       onComplete: () => {
//         gsap.to(notreElement.value, {
//           x: 0,
//           y: 0,
//           color: 'var(--color-custom-red)', // Réinitialise la couleur
//           duration: 0.2,
//         });
//       },
//     });
//   }
// };
// const animateTextSkew = () => {
//   if (notreElement.value) {
//     gsap.to(notreElement.value, {
//       skewX: 20, // Inclinaison sur l'axe X
//       skewY: 10, // Inclinaison sur l'axe Y
//       duration: 0.5,
//       ease: 'power2.out',
//       onComplete: () => {
//         gsap.to(notreElement.value, {
//           skewX: 0,
//           skewY: 0,
//           duration: 0.5,
//         });
//       },
//     });
//   }
// };

const animateTextExplode = () => {
  if (notreElement.value) {
    const letters = notreElement.value?.textContent?.split('') || [];
    notreElement.value.innerHTML = letters
      .map(
        (letter) =>
          `<span class="letter" style="display: inline-block;">${letter}</span>`
      )
      .join('');

    gsap.to('.letter', {
      x: () => gsap.utils.random(-50, 50), // Déplacement aléatoire sur l'axe X
      y: () => gsap.utils.random(-50, 50), // Déplacement aléatoire sur l'axe Y
      opacity: 0, // Fait disparaître les lettres
      duration: 0.5,
      stagger: 0.1, // Délai entre chaque lettre
      ease: 'power2.out',
      onComplete: () => {
        gsap.to('.letter', {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          onComplete: () => {
            if (notreElement.value) {
              notreElement.value.innerHTML = letters.join(''); // Réinitialise le texte
            }
          },
        });
      },
    });
  }
};
</script>
