<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  description?: string
  repo?: string
  linkLabel?: string
}>()
</script>

<template>
  <UPageSection
    :headline="headline"
    :title="title"
    :description="description"
    orientation="horizontal"
    :links="[{ label: linkLabel, to: repo, target: '_blank', icon: 'i-simple-icons-github', color: 'neutral', variant: 'subtle' }]"
  >
    <AppMockupRepoMockup />
  </UPageSection>
</template>
