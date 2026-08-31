<script setup lang="ts">
interface Principle {
  icon: string
  title: string
  description: string
}

withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  principles?: Principle[]
}>(), {
  principles: () => []
})
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description">
    <UPageGrid class="sm:grid-cols-2 lg:grid-cols-3">
      <FeatureTile
        v-for="principle in principles"
        :key="principle.title"
        :icon="principle.icon"
        :title="principle.title"
        :description="principle.description"
        color="primary"
      />
    </UPageGrid>
  </UPageSection>
</template>
