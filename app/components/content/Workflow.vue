<script setup lang="ts">
interface Step {
  icon: string
  label: string
  example: string
  automation: string
}

withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  steps?: Step[]
  ctaLabel?: string
  ctaTo?: string
}>(), {
  headline: 'Un seul fil, du début à la fin',
  title: 'De la ressource au paiement.',
  description: 'Cascade relie des objets aujourd’hui dispersés entre plusieurs outils, sans rupture entre eux.',
  steps: () => [
    {
      icon: 'i-lucide-box',
      label: 'Ressource',
      example: 'Ex : Bureau 12 — 18 m², Tiers-lieu La Grange',
      automation: 'Disponibilité recalculée automatiquement selon les contrats en cours'
    },
    {
      icon: 'i-lucide-file-signature',
      label: 'Contrat',
      example: 'Ex : Contrat d’occupation — Atelier Nomade, 12 mois',
      automation: 'Renouvellement et avenants générés automatiquement à échéance'
    },
    {
      icon: 'i-lucide-hand-coins',
      label: 'Contribution',
      example: 'Ex : 340 € / mois + charges communes adaptatives',
      automation: 'Recalculée automatiquement selon la formule adaptative'
    },
    {
      icon: 'i-lucide-receipt-text',
      label: 'Facture',
      example: 'Ex : Facture #2024-114 — La Filature Coop',
      automation: 'Générée et envoyée automatiquement à échéance'
    },
    {
      icon: 'i-lucide-credit-card',
      label: 'Paiement',
      example: 'Ex : Prélèvement SEPA, le 5 du mois',
      automation: 'Rapproché automatiquement de la facture correspondante'
    }
  ],
  ctaLabel: 'Voir toutes les fonctionnalités',
  ctaTo: '/fonctionnalites'
})
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description">
    <div class="flex flex-col items-stretch gap-2 lg:flex-row lg:items-stretch lg:justify-between">
      <template v-for="(step, index) in steps" :key="step.label">
        <div class="flex flex-1 flex-col items-center gap-2 rounded-lg border border-default bg-default px-4 py-5 text-center">
          <UIcon :name="step.icon" class="size-6 text-primary" />
          <p class="text-sm font-medium text-highlighted">{{ step.label }}</p>
          <p class="text-xs text-muted">{{ step.example }}</p>
          <div class="mt-auto flex items-start gap-1 pt-1 text-xs font-medium text-primary">
            <UIcon name="i-lucide-zap" class="mt-0.5 size-3.5 shrink-0" />
            <span>{{ step.automation }}</span>
          </div>
        </div>
        <UIcon
          v-if="index < steps.length - 1"
          name="i-lucide-arrow-right"
          class="size-4 shrink-0 self-center text-dimmed rotate-90 lg:rotate-0"
        />
      </template>
    </div>

    <div class="mt-10 flex justify-center">
      <UButton :to="ctaTo" color="neutral" variant="subtle" trailing-icon="i-lucide-arrow-right">
        {{ ctaLabel }}
      </UButton>
    </div>
  </UPageSection>
</template>
