<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  description?: string
}>()

const { locale } = useI18n()

const { data: experiments } = await useAsyncData('experiments', () =>
  queryCollection(locale.value === 'en' ? 'experiments_en' : 'experiments_fr').all(),
  { watch: [locale] }
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
