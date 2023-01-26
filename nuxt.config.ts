// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
      head:{
        title:'Nuxt Dojo',
        meta: [
          { name: 'description',content: 'Everthing about Nuxt 3'},
        ],
        link: [
          { rel: 'stylesheet' ,href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
        ]
      }
    },
    css: ['~/assets/tailwind.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      }
    },
    runtimeConfig: {
      currencyKey: process.env.CURRENCY_API_KEY
    }
})
 