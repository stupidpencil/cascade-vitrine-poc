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
  headline: 'Un seul fil, du début à la fin',
  title: 'De la ressource au paiement.',
  description: 'Cascade relie des objets aujourd’hui dispersés entre plusieurs outils, sans rupture entre eux.',
  steps: () => [
    {
      icon: 'i-lucide-box',
      label: 'Ressource',
      example: 'Ex : Bureau 12 — 18 m², Tiers-lieu La Grange',
      automation: 'Disponibilité recalculée automatiquement selon les souscriptions en cours'
    },
    {
      icon: 'i-lucide-layout-template',
      label: 'Modèle de souscription',
      example: 'Ex : Bureau — mensuel, 340 €, facturé par facture',
      automation: 'Défini une fois par le gestionnaire, appliqué à chaque nouvelle souscription'
    },
    {
      icon: 'i-lucide-file-signature',
      label: 'Souscription',
      example: 'Ex : Souscription — Atelier Nomade, 12 mois',
      automation: 'Avenant et nouvelle version générés automatiquement à chaque changement'
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

const firstRow = computed(() => props.steps.slice(0, 3))
const secondRow = computed(() => props.steps.slice(3))
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
      <UButton :to="ctaTo" color="neutral" variant="subtle" trailing-icon="i-lucide-arrow-right">
        {{ ctaLabel }}
      </UButton>
    </div>
  </UPageSection>
</template>
