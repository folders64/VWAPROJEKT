// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

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
  },
  plugins: [
    /*'~/plugins/gsap.js',*/
    '~/plugins/touch-detection.js'
  ],
  app: {
    head: {
      htmlAttrs: {
        'data-comment': 'hey what are you doing here?'
      }
    }
  }
})