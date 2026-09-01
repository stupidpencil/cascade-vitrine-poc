<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  description?: string
  ctaLabel?: string
  ctaTo?: string
}>()

const localePath = useLocalePath()
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description" orientation="horizontal">
    <template v-if="ctaTo" #links>
      <UButton :to="localePath(ctaTo)" trailing-icon="i-lucide-arrow-right">
        {{ ctaLabel }}
      </UButton>
    </template>

    <AppMockupAdaptiveContributionDiagram />
  </UPageSection>
</template>
