<script setup lang="ts">
interface Step {
  today: string
  tomorrow: string
}

withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  steps?: Step[]
}>(), {
  headline: 'Où en est Cascade aujourd’hui',
  steps: () => []
})
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description">
    <div class="mx-auto flex max-w-3xl flex-col gap-4">
      <div
        v-for="step in steps"
        :key="step.today"
        class="flex flex-col gap-3 rounded-lg border border-default p-5 sm:flex-row sm:items-center"
      >
        <div class="sm:flex-1">
          <p class="text-xs font-medium text-dimmed">Aujourd’hui</p>
          <p class="mt-1 text-toned">{{ step.today }}</p>
        </div>
        <UIcon name="i-lucide-arrow-right" class="size-5 shrink-0 rotate-90 text-primary sm:rotate-0" />
        <div class="sm:flex-1">
          <p class="text-xs font-medium text-primary">Demain</p>
          <p class="mt-1 font-medium text-highlighted">{{ step.tomorrow }}</p>
        </div>
      </div>
    </div>
  </UPageSection>
</template>
