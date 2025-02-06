// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  extends: [
    ['../nuxt-layer-test-layer', { install: true }],
    // ['github:leeovery/nuxt-layers/base', { install: true }]
  ],
});
