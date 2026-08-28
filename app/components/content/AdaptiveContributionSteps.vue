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
  headline: 'Comment ça marche',
  title: 'Quatre ingrédients, un seul calcul automatique.',
  description: 'La contribution adaptative n’est pas une remise au cas par cas : c’est une règle explicite, appliquée par Cascade à chaque membre du collectif.',
  steps: () => [
    {
      title: 'Un objectif collectif',
      description: 'Le collectif fixe le montant total à couvrir : charges communes, achat groupé, budget de fonctionnement.'
    },
    {
      title: 'Une règle de répartition',
      description: 'Pourcentage de revenu, quotient familial, barème par tranche ou contribution libre avec plancher solidaire : chaque collectif choisit sa règle.'
    },
    {
      title: 'Un calcul automatique',
      description: 'Cascade applique la règle à chaque membre et recalcule sa contribution dès qu’un profil ou l’objectif change.'
    },
    {
      title: 'Un ajustement à tout moment',
      description: 'L’objectif ou la règle peuvent évoluer en cours de route ; les contributions se réajustent sans ressaisie.'
    }
  ]
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
