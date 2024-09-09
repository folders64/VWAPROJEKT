// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-09-08',
  modules: [
    '@nuxtjs/color-mode',
    '@hypernym/nuxt-gsap',
    '@nuxtjs/tailwindcss'
  ],

  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: ''
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  }
})