<script setup lang="ts">
interface Example {
  icon: string
  context: string
  label: string
  amount: string
}

withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  examples?: Example[]
}>(), {
  headline: 'En pratique',
  title: 'La même mécanique, des usages très différents.',
  description: 'Ces montants sont ceux utilisés ailleurs sur ce site pour illustrer chaque cas d’usage — la règle change, le mécanisme reste identique.',
  examples: () => [
    {
      icon: 'i-lucide-map-pin-house',
      context: 'Tiers-lieu',
      label: 'Charges communes',
      amount: '38 — 62 € / mois selon l’usage des espaces partagés'
    },
    {
      icon: 'i-lucide-carrot',
      context: 'AMAP',
      label: 'Panier solidaire',
      amount: '8 — 16 € / semaine pour garder l’accès ouvert à tous'
    },
    {
      icon: 'i-lucide-building-2',
      context: 'Coopérative',
      label: 'Fonds de mutualisation',
      amount: '10 — 25 € / mois selon les projets en cours'
    },
    {
      icon: 'i-lucide-baby',
      context: 'Crèche parentale',
      label: 'Compensation garde manquée',
      amount: '15 — 45 € / mois selon les gardes non assurées'
    }
  ]
})
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description">
    <UPageGrid class="sm:grid-cols-2 lg:grid-cols-2">
      <div v-for="example in examples" :key="example.context" class="flex items-start gap-4 rounded-lg border border-default bg-default px-5 py-4">
        <div class="flex size-10 shrink-0 items-center justify-center rounded-full icon-badge-primary text-primary">
          <UIcon :name="example.icon" class="size-5" />
        </div>
        <div>
          <p class="text-xs font-medium text-dimmed">{{ example.context }}</p>
          <p class="font-semibold text-highlighted">{{ example.label }}</p>
          <p class="mt-1 text-sm text-muted">{{ example.amount }}</p>
        </div>
      </div>
    </UPageGrid>
  </UPageSection>
</template>

<style scoped>
/* bg-primary/10 silently fails: `primary` is remapped at runtime via
   app.config and isn't in Tailwind's build-time palette. */
.icon-badge-primary {
  background-color: color-mix(in oklch, var(--ui-primary) 12%, transparent);
}
</style>
