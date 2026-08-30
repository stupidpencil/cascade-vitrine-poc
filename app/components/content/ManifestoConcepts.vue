<script setup lang="ts">
interface Concept {
  icon: string
  title: string
  description: string
}

withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  concepts?: Concept[]
}>(), {
  headline: 'Le vocabulaire Cascade',
  concepts: () => []
})
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description">
    <UPageGrid class="sm:grid-cols-3">
      <FeatureTile
        v-for="concept in concepts"
        :key="concept.title"
        :icon="concept.icon"
        :title="concept.title"
        :description="concept.description"
        color="primary"
      />
    </UPageGrid>
  </UPageSection>
</template>
