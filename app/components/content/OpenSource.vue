<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
  repo?: string
}>(), {
  title: 'Cascade est un logiciel libre.',
  description: 'Le code de Cascade est ouvert et auditable. C’est une manière de rester cohérent avec ce que le projet défend : la transparence, la mutualisation, et des outils qui appartiennent à celles et ceux qui les utilisent.',
  repo: 'https://github.com/cascade-coop'
})
</script>

<template>
  <UPageSection
    headline="Open source"
    :title="title"
    :description="description"
    orientation="horizontal"
    :links="[{ label: 'Voir le code sur GitHub', to: repo, target: '_blank', icon: 'i-simple-icons-github', color: 'neutral', variant: 'subtle' }]"
  >
    <AppMockupRepoMockup />
  </UPageSection>
</template>
