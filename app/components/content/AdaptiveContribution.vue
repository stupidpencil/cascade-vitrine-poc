<script setup lang="ts">
withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  ctaLabel?: string
  ctaTo?: string
}>(), {
  headline: 'Contribution adaptative',
  title: 'Et si le prix pouvait s’adapter aux besoins réels ?',
  description: 'Les contributions peuvent être ajustées en fonction des besoins réels du collectif et des règles décidées ensemble — pas d’un tarif figé décidé d’avance.'
})
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description" orientation="horizontal">
    <template v-if="ctaTo" #links>
      <UButton :to="ctaTo" trailing-icon="i-lucide-arrow-right">
        {{ ctaLabel }}
      </UButton>
    </template>

    <AppMockupAdaptiveContributionDiagram />
  </UPageSection>
</template>
