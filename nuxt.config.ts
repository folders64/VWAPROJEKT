// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import type { Manifest } from 'vite'

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
  hooks: {
    'vite:extendConfig': (config, { isServer }) => {
      if (!isServer) {
        config.plugins = config.plugins || []
        config.plugins.push({
          name: 'html-transform',
          transformIndexHtml(html) {
            return html.replace(
              /<!DOCTYPE html>/i,
              '<!DOCTYPE html>\n<!-- jfhoufhpdbfpaohjfouahsfpiaihsb -->'
            )
          },
        })
      }
    }
  }
})