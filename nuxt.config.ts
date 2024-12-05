// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/test-utils/module',
    "@nuxtjs/tailwindcss",
    '@pinia/nuxt',
  ],

  pinia: {
    storesDirs: ['./store/**'],
  },

  runtimeConfig: {
    public: {
      hello: 'world',
      testValue: 'default'
    },
  },

  compatibilityDate: '2024-12-02'
})