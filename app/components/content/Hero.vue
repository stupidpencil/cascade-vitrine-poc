<script setup lang="ts">
withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
}>(), {
  headline: 'Bêta — Gestion de bout en bout',
  title: 'La plupart des outils s’arrêtent à la facture. Cascade couvre tout le cycle.',
  description: 'Du modèle de souscription à la contribution, en passant par la facturation : chaque étape reste connectée aux autres, sans ressaisie.'
})

const { open: openContactModal } = useContactModal()
</script>

<template>
  <div class="relative">
    <WaveDecoration side="left" />
    <WaveDecoration side="right" />

    <UPageHero :headline="headline" :title="title" :description="description" orientation="horizontal">
      <template #links>
        <UButton to="/cascade" trailing-icon="i-lucide-arrow-right" size="lg">
          Découvrir Cascade
        </UButton>
        <UButton color="neutral" variant="subtle" size="lg" @click="openContactModal">
          Demander une démo
        </UButton>
      </template>

      <AppMockupLifecycleTiles />
    </UPageHero>
  </div>
</template>
