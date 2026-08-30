// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // @nuxthq/studio (live-editing) is incompatible with the installed
  // @nuxt/content version and breaks production builds — dev-only until
  // studio publishes a fix.
  modules: ['@nuxt/ui', '@nuxt/content', ...(process.env.NODE_ENV === 'development' ? ['@nuxthq/studio'] : [])],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css']
})
