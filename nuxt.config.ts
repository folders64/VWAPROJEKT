// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /*
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
  */
  modules: [
    '@nuxtjs/color-mode',
    '@hypernym/nuxt-gsap',
    '@nuxtjs/tailwindcss'
  ],

  colorMode: {
    classSuffix: ''
  },

  compatibilityDate: '2024-09-08'
})