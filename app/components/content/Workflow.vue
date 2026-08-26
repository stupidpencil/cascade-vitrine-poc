<script setup lang="ts">
interface Step {
  icon: string
  label: string
}

withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  steps?: Step[]
}>(), {
  headline: 'Un seul fil, du début à la fin',
  title: 'De la ressource au paiement.',
  description: 'Cascade relie des objets aujourd’hui dispersés entre plusieurs outils, sans rupture entre eux.',
  steps: () => [
    { icon: 'i-lucide-box', label: 'Ressource' },
    { icon: 'i-lucide-file-signature', label: 'Contrat' },
    { icon: 'i-lucide-hand-coins', label: 'Contribution' },
    { icon: 'i-lucide-receipt-text', label: 'Facture' },
    { icon: 'i-lucide-credit-card', label: 'Paiement' }
  ]
})
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description">
    <div class="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-between">
      <template v-for="(step, index) in steps" :key="step.label">
        <div class="flex flex-1 flex-col items-center gap-2 rounded-lg border border-default bg-default px-4 py-5 text-center">
          <UIcon :name="step.icon" class="size-6 text-primary" />
          <p class="text-sm font-medium text-highlighted">{{ step.label }}</p>
        </div>
        <UIcon
          v-if="index < steps.length - 1"
          name="i-lucide-arrow-right"
          class="size-4 shrink-0 self-center text-dimmed rotate-90 sm:rotate-0"
        />
      </template>
    </div>
  </UPageSection>
</template>
