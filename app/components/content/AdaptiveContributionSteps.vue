<script setup lang="ts">
interface Step {
  title: string
  description: string
}

withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  steps?: Step[]
}>(), {
  steps: () => []
})
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description">
    <UPageGrid class="sm:grid-cols-2 lg:grid-cols-2">
      <div v-for="(step, index) in steps" :key="step.title" class="flex gap-4">
        <div class="flex size-9 shrink-0 items-center justify-center rounded-full bg-elevated text-sm font-semibold text-primary">
          {{ index + 1 }}
        </div>
        <div>
          <p class="font-semibold text-highlighted">{{ step.title }}</p>
          <p class="mt-1 text-sm text-muted">{{ step.description }}</p>
        </div>
      </div>
    </UPageGrid>
  </UPageSection>
</template>
