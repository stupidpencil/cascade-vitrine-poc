<script setup lang="ts">
interface Partner {
  icon: string
  name: string
  description: string
}

withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  partners?: Partner[]
}>(), {
  partners: () => []
})
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description">
    <UPageGrid class="sm:grid-cols-2 lg:grid-cols-3">
      <FeatureTile
        v-for="partner in partners"
        :key="partner.name"
        :icon="partner.icon"
        :title="partner.name"
        :description="partner.description"
        color="primary"
      />
    </UPageGrid>
  </UPageSection>
</template>
