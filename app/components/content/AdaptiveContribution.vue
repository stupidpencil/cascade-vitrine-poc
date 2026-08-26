<script setup lang="ts">
const props = withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  need?: number
  planned?: number
  note?: string
}>(), {
  headline: 'Contribution adaptative',
  title: 'Et si le prix pouvait s’adapter aux besoins réels ?',
  description: 'Les contributions peuvent être ajustées en fonction des besoins réels du collectif et des règles décidées ensemble — pas d’un tarif figé décidé d’avance.',
  need: 10000,
  planned: 10800,
  note: 'Ajustement / redistribution selon les règles du collectif'
})

const surplus = computed(() => props.planned - props.need)
const plannedWidth = 100
const needWidth = computed(() => Math.round((props.need / props.planned) * 100))
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description" orientation="horizontal" reverse>
    <UPageCard variant="subtle" class="w-full">
      <div class="flex flex-col gap-6">
        <div>
          <div class="mb-2 flex items-baseline justify-between">
            <p class="text-sm text-muted">Besoin collectif</p>
            <p class="font-medium text-highlighted">{{ need.toLocaleString('fr-FR') }} €</p>
          </div>
          <div class="h-2.5 overflow-hidden rounded-full bg-elevated">
            <div class="h-full rounded-full bg-neutral-400 dark:bg-neutral-500" :style="{ width: `${needWidth}%` }" />
          </div>
        </div>

        <div>
          <div class="mb-2 flex items-baseline justify-between">
            <p class="text-sm text-muted">Contributions prévues</p>
            <p class="font-medium text-highlighted">{{ planned.toLocaleString('fr-FR') }} €</p>
          </div>
          <div class="h-2.5 overflow-hidden rounded-full bg-elevated">
            <div class="h-full rounded-full bg-primary" :style="{ width: `${plannedWidth}%` }" />
          </div>
        </div>

        <USeparator />

        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div class="shrink-0 whitespace-nowrap">
            <p class="text-sm text-muted">Surplus</p>
            <p class="text-lg font-semibold text-highlighted">+{{ surplus.toLocaleString('fr-FR') }} €</p>
          </div>
          <div class="flex items-center gap-2 text-sm text-primary">
            <UIcon name="i-lucide-corner-down-right" class="size-4 shrink-0" />
            <span>{{ note }}</span>
          </div>
        </div>
      </div>
    </UPageCard>
  </UPageSection>
</template>
