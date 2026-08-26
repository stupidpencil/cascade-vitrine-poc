<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
  repo?: string
}>(), {
  title: 'Un code ouvert, sous licence Coopyleft.',
  description: 'Le code de Cascade est ouvert et auditable par toutes et tous. La licence Coopyleft va plus loin qu’une licence libre classique : elle réserve l’usage commercial aux coopératives et aux organisations à but non lucratif. Une manière de rester cohérent avec ce que le projet défend — la mutualisation plutôt que l’extraction de valeur.',
  repo: 'https://github.com/cascade-coop'
})
</script>

<template>
  <UPageSection
    headline="Coopyleft"
    :title="title"
    :description="description"
    orientation="horizontal"
    :links="[{ label: 'Voir le code sur GitHub', to: repo, target: '_blank', icon: 'i-simple-icons-github', color: 'neutral', variant: 'subtle' }]"
  >
    <AppMockupRepoMockup />
  </UPageSection>
</template>
