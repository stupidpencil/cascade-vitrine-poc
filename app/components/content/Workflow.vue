<script setup lang="ts">
interface Step {
  icon: string
  label: string
  example: string
  automation: string
}

const props = withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  steps?: Step[]
  ctaLabel?: string
  ctaTo?: string
}>(), {
  steps: () => []
})

const firstRow = computed(() => props.steps.slice(0, 3))
const secondRow = computed(() => props.steps.slice(3))

const localePath = useLocalePath()
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description">
    <!-- Mobile / narrow: single vertical column -->
    <div class="flex flex-col items-stretch gap-2 xl:hidden">
      <template v-for="(step, index) in steps" :key="step.label">
        <WorkflowStepCard v-bind="step" />
        <UIcon
          v-if="index < steps.length - 1"
          name="i-lucide-arrow-right"
          class="size-4 shrink-0 self-center text-dimmed rotate-90"
        />
      </template>
    </div>

    <!-- xl and up: two rows of three, so each card gets more room to breathe -->
    <div class="hidden xl:flex xl:flex-col xl:items-stretch xl:gap-4">
      <div class="flex items-stretch justify-between gap-2">
        <template v-for="(step, index) in firstRow" :key="step.label">
          <WorkflowStepCard v-bind="step" />
          <UIcon
            v-if="index < firstRow.length - 1"
            name="i-lucide-arrow-right"
            class="size-4 shrink-0 self-center text-dimmed"
          />
        </template>
      </div>
      <UIcon name="i-lucide-arrow-down" class="size-4 shrink-0 self-center text-dimmed" />
      <div class="flex items-stretch justify-between gap-2">
        <template v-for="(step, index) in secondRow" :key="step.label">
          <WorkflowStepCard v-bind="step" />
          <UIcon
            v-if="index < secondRow.length - 1"
            name="i-lucide-arrow-right"
            class="size-4 shrink-0 self-center text-dimmed"
          />
        </template>
      </div>
    </div>

    <div class="mt-10 flex justify-center">
      <UButton :to="localePath(ctaTo ?? '/')" color="neutral" variant="subtle" trailing-icon="i-lucide-arrow-right">
        {{ ctaLabel }}
      </UButton>
    </div>
  </UPageSection>
</template>
