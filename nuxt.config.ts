import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/css/fonts.css'],

  site: { 
    url: 'https://orthopedagogie-annecy.fr', 
    name: 'Julie Boisson - Orthopédagogie - Annecy' 
  }, 

  app: {
    head: {
      title: 'Julie Boisson - Orthopédagogie - Annecy',
      meta: [
        { name: 'description', content: 'Orthopédagogie à Annecy – Julie Boisson, orthopédagogue certifiée, propose un accompagnement personnalisé pour enfants, adolescents et adultes présentant des troubles ou difficultés d’apprentissage. Retrouvez confiance, motivation et autonomie grâce à une écoute bienveillante et des interventions adaptées à chaque profil.' },
      
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },

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
  },

  modules: ['@nuxtjs/sitemap']
})