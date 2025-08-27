import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/css/fonts.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  runtimeConfig: {
    public: {
      emailServiceId: process.env.EMAIL_SERVICE_ID,
      emailTemplateId: process.env.EMAIL_TEMPLATE_ID,
      emailApiKey: process.env.EMAIL_API_KEY
    }
  }
})
