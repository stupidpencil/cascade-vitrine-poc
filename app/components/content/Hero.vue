<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: 'Gérez vos ressources collectivement.',
  description: 'Cascade aide les lieux, collectifs et organisations à gérer leurs contrats, contributions, factures et ressources à travers des règles transparentes et coopératives.'
})
</script>

<template>
  <UPageHero
    :title="title"
    :description="description"
    orientation="horizontal"
    :links="[
      { label: 'Découvrir Cascade', to: '/produit', trailingIcon: 'i-lucide-arrow-right', size: 'lg' },
      { label: 'Demander une démo', to: '/a-propos', color: 'neutral', variant: 'subtle', size: 'lg' }
    ]"
  >
    <AppMockupContractsMockup />
  </UPageHero>
</template>
