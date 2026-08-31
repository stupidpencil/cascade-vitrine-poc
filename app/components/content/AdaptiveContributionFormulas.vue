<script setup lang="ts">
interface Formula {
  icon: string
  title: string
  description: string
}

withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  formulas?: Formula[]
}>(), {
  formulas: () => []
})
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description">
    <UPageGrid class="sm:grid-cols-2 lg:grid-cols-4">
      <FeatureTile
        v-for="formula in formulas"
        :key="formula.title"
        :icon="formula.icon"
        :title="formula.title"
        :description="formula.description"
        color="primary"
      />
    </UPageGrid>
  </UPageSection>
</template>
