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
  showMockups?: boolean
}>(), {
  showMockups: true,
  features: () => []
})
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description">
    <UPageGrid class="sm:grid-cols-2 lg:grid-cols-3">
      <FeatureTile
        v-for="feature in features"
        :key="feature.title"
        :icon="feature.icon"
        :title="feature.title"
        :description="feature.description"
        color="primary"
      />
    </UPageGrid>

    <div v-if="showMockups" class="mt-12 grid gap-6 lg:grid-cols-2">
      <AppMockupContributionsMockup />
      <AppMockupPilotageMockup />
    </div>
  </UPageSection>
</template>
