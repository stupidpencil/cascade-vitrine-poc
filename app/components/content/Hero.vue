<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: 'Gérez vos ressources collectivement.',
  description: 'Cascade aide les lieux, collectifs et organisations à gérer leurs contrats, contributions, factures et ressources à travers des règles transparentes et coopératives.'
})

const { open: openContactModal } = useContactModal()
</script>

<template>
  <UPageHero :title="title" :description="description" orientation="horizontal">
    <template #links>
      <UButton to="/cascade" trailing-icon="i-lucide-arrow-right" size="lg">
        Découvrir Cascade
      </UButton>
      <UButton color="neutral" variant="subtle" size="lg" @click="openContactModal">
        Demander une démo
      </UButton>
    </template>

    <AppMockupContractsMockup />
  </UPageHero>
</template>
