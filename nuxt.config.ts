import tailwindcss from '@tailwindcss/vite';

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
    url: '',
    name: '',
  },
  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: 'G-KND0BZG5MD',
  },
  schemaOrg: {},
});
