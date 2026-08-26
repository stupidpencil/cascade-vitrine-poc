<script setup lang="ts">
interface Feature {
  icon: string
  title: string
  description: string
}

withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  features?: Feature[]
}>(), {
  headline: 'Le produit',
  title: 'Tout ce qu’il faut pour gérer un collectif, au même endroit.',
  description: 'Cascade centralise ce qui est aujourd’hui dispersé entre tableurs, emails et logiciels de facturation.',
  features: () => [
    { icon: 'i-lucide-file-signature', title: 'Contrats', description: 'Centraliser contrats, ressources et conditions d’utilisation.' },
    { icon: 'i-lucide-hand-coins', title: 'Contributions', description: 'Définir des contributions ponctuelles ou récurrentes, fixes ou adaptatives.' },
    { icon: 'i-lucide-receipt-text', title: 'Facturation', description: 'Générer factures et avoirs et suivre leur état.' },
    { icon: 'i-lucide-credit-card', title: 'Paiements', description: 'Suivre les paiements et, progressivement, automatiser les flux.' },
    { icon: 'i-lucide-line-chart', title: 'Pilotage', description: 'Comprendre les ressources, contributions et flux du collectif.' }
  ]
})
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description">
    <UPageGrid class="sm:grid-cols-2 lg:grid-cols-3">
      <UPageCard
        v-for="feature in features"
        :key="feature.title"
        :icon="feature.icon"
        :title="feature.title"
        :description="feature.description"
        spotlight
      />
    </UPageGrid>

    <div class="mt-12 grid gap-6 lg:grid-cols-2">
      <AppMockupContributionsMockup />
      <AppMockupPilotageMockup />
    </div>
  </UPageSection>
</template>
