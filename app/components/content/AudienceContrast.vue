<script setup lang="ts">
interface Column {
  title: string
  points: string[]
}

withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  conventional?: Column
  collective?: Column
}>(), {
  headline: 'Une autre façon de faire',
  title: 'Les entreprises ordinaires et les organisations collectives ne fonctionnent pas pareil.',
  description: 'Les outils de gestion classiques encodent les règles du premier modèle. Cascade outille le second.',
  conventional: () => ({
    title: 'Entreprise ordinaire',
    points: [
      'Une direction qui décide',
      'Un prix fixé par unité vendue',
      'Une gouvernance fermée aux parties prenantes',
      'La rentabilité comme finalité'
    ]
  }),
  collective: () => ({
    title: 'Organisation collective',
    points: [
      'Une gouvernance partagée entre membres',
      'Une contribution ajustée aux besoins et aux moyens',
      'Des règles décidées collectivement, en amont',
      'La mutualisation comme finalité'
    ]
  })
})
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description">
    <div class="grid gap-6 sm:grid-cols-2">
      <div class="rounded-xl border border-default bg-elevated/30 p-6">
        <p class="text-sm font-medium text-dimmed">{{ conventional.title }}</p>
        <ul class="mt-4 flex flex-col gap-3">
          <li v-for="point in conventional.points" :key="point" class="flex items-start gap-2 text-sm text-muted">
            <UIcon name="i-lucide-x" class="mt-0.5 size-4 shrink-0 text-dimmed" />
            {{ point }}
          </li>
        </ul>
      </div>

      <div class="rounded-xl border-2 border-primary bg-elevated/50 p-6">
        <p class="text-sm font-medium text-primary">{{ collective.title }}</p>
        <ul class="mt-4 flex flex-col gap-3">
          <li v-for="point in collective.points" :key="point" class="flex items-start gap-2 text-sm text-toned">
            <UIcon name="i-lucide-check" class="mt-0.5 size-4 shrink-0 text-primary" />
            {{ point }}
          </li>
        </ul>
      </div>
    </div>
  </UPageSection>
</template>
