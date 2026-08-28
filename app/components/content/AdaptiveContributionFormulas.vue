<script setup lang="ts">
interface Formula {
  icon: string
  title: string
  description: string
}

withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  formulas?: Formula[]
}>(), {
  headline: 'Les règles possibles',
  title: 'Chaque collectif choisit sa formule.',
  description: 'Cascade n’impose pas de barème : il applique celui que le collectif a décidé, et le fait respecter à chaque contribution.',
  formulas: () => [
    {
      icon: 'i-lucide-percent',
      title: 'Pourcentage du revenu',
      description: 'Chacun contribue proportionnellement à ce qu’il déclare.'
    },
    {
      icon: 'i-lucide-users',
      title: 'Quotient familial',
      description: 'Le montant tient compte de la composition du foyer, comme pour une crèche.'
    },
    {
      icon: 'i-lucide-layers',
      title: 'Barème par tranche',
      description: 'Des paliers définis à l’avance, du plus solidaire au plus confortable.'
    },
    {
      icon: 'i-lucide-heart-handshake',
      title: 'Libre avec plancher solidaire',
      description: 'Chacun donne ce qu’il peut, au-dessus d’un minimum garanti pour le collectif.'
    }
  ]
})
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description">
    <UPageGrid class="sm:grid-cols-2 lg:grid-cols-4">
      <FeatureTile
        v-for="formula in formulas"
        :key="formula.title"
        :icon="formula.icon"
        :title="formula.title"
        :description="formula.description"
        color="primary"
      />
    </UPageGrid>
  </UPageSection>
</template>
