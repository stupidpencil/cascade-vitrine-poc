// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/content'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  icon: {
    // Without this, Nuxt Icon only pre-bundles Nuxt UI's own default icons
    // and fetches every icon used in our own templates from the Iconify
    // API at runtime — a failure (offline, blocked, slow network) silently
    // breaks whatever layout depends on that icon rendering. Scanning and
    // bundling everything locally removes that runtime dependency.
    clientBundle: {
      scan: true,
      includeCustomCollections: true
    }
  }
})
