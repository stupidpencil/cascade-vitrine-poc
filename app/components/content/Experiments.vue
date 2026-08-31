<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  description?: string
}>()

const { data: experiments } = await useAsyncData('experiments', () =>
  queryCollection('experiments').all()
)
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description">
    <UPageGrid class="sm:grid-cols-2 lg:grid-cols-3">
      <UPageCard
        v-for="experiment in experiments"
        :key="experiment.id"
        :title="experiment.organization"
        :description="experiment.quote"
      >
        <template #leading>
          <UBadge v-if="experiment.kind" color="neutral" variant="subtle" size="sm">
            {{ experiment.kind }}
          </UBadge>
        </template>
      </UPageCard>
    </UPageGrid>
  </UPageSection>
</template>
