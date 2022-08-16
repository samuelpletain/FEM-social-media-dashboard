import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
  css: [
    'reset-css'
  ],
  vite: {
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/assets/scss/styles.scss";',
            },
        },
    },
},
  content: {
    // https://content.nuxtjs.org/api/configuration
  }
})
