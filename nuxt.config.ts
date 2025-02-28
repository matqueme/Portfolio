import tailwindcss from '@tailwindcss/vite';
import { defineLocalBusiness } from 'nuxt-schema-org/schema';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-gtag',
    'nuxt-schema-org',
    '@nuxt/image',
    'nuxt-phosphor-icons',
    [
      'nuxt-svgo',
      {
        defaultImport: 'component',
      },
    ],
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'fr',
    locales: [
      { code: 'en', file: 'en/index.ts' },
      { code: 'fr', file: 'fr/index.ts' },
    ],
    langDir: 'locales/',
    lazy: true,
  },
  site: {
    url: 'https://studio-qm.fr',
    name: 'Q&M Studio',
  },
  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: 'G-XXXXXXXXXX',
  },
  schemaOrg: {
    identity: defineLocalBusiness({
      '@context': 'https://schema.org',
      '@type': ['Organization', 'LocalBusiness'],
      name: 'Q&M Studio',
      url: 'https://studio-qm.fr',
      logo: 'https://www.studio-qm.fr/images/icon.png',
      description:
        'Nous concevons des sites web modernes et optimisés, alliant design soigné, visibilité sur Google et stratégie digitale efficace.',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+33 7 68 08 16 84',
        contactType: 'customer service',
        email: 'contact@studio-qm.fr',
        availableLanguage: 'French',
      },
      founders: [
        {
          '@type': 'Person',
          name: 'Mathis Quemener',
          sameAs: 'https://www.linkedin.com/in/mathis-quemener',
        },
        {
          '@type': 'Person',
          name: 'Quentin Simler',
          sameAs: 'https://www.linkedin.com/in/quentin-simler',
        },
      ],
      sameAs: [
        'https://www.linkedin.com/in/mathis-quemener',
        'https://www.linkedin.com/in/quentin-simler',
      ],
      offers: [
        {
          '@type': 'Offer',
          name: 'Plan Starter',
          description:
            'Parfait pour les petits projets ou les entrepreneurs qui souhaitent démarrer ou refaire leur site.',
          price: '1200',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          name: 'Plan Pro',
          description:
            'Idéal pour les entreprises qui souhaitent une présence en ligne plus complète.',
          price: '2000',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          name: 'Plan Sur Mesure',
          description:
            'Pour les projets complexes et uniques, nécessitant une approche 100 % personnalisée.',
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: 'Sur devis',
            priceCurrency: 'EUR',
          },
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Nos plans pour vous',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Plan Starter',
            url: 'https://studio-qm.fr#starter',
          },
          {
            '@type': 'Offer',
            name: 'Plan Pro',
            url: 'https://studio-qm.fr#pro',
          },
          {
            '@type': 'Offer',
            name: 'Plan Sur Mesure',
            url: 'https://studio-qm.fr#sur-mesure',
          },
        ],
      },
      knowsAbout: [
        'Création de site web',
        'SEO',
        'Identité visuelle',
        'Expérience utilisateur (UI/UX)',
        'Stratégie digitale',
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '20:00',
      },
      keywords: [
        'création de site web',
        'SEO',
        'design',
        'stratégie digitale',
        'UI/UX',
        'brest',
        'finistère',
        'bretagne',
      ],
      foundingDate: '2024-11-01',
    }),
  },
});
