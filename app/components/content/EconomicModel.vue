<script setup lang="ts">
interface Principle {
  icon: string
  title: string
  description: string
}

withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  principles?: Principle[]
}>(), {
  headline: 'Modèle économique',
  title: 'Une commission qui suit l’usage, pas un logiciel qui capte de la valeur.',
  description: 'Cascade s’inspire du modèle de CoopCycle, la fédération de coopératives de livraison à vélo qui a montré qu’un outil numérique peut être mutualisé et gouverné démocratiquement plutôt que capté par un acteur privé.',
  principles: () => [
    {
      icon: 'i-lucide-percent',
      title: 'Proportionnelle à l’usage réel',
      description: 'Cascade prélève une part, faible, du chiffre d’affaires géré via la plateforme — jamais un abonnement fixe déconnecté de l’activité réelle des lieux.'
    },
    {
      icon: 'i-lucide-gauge',
      title: 'Plafonnée, jamais extractive',
      description: 'Au-delà d’un certain seuil, le taux diminue : l’objectif est l’équilibre financier de la fédération, pas la maximisation d’un profit.'
    },
    {
      icon: 'i-lucide-users',
      title: 'Financé par ses membres',
      description: 'Cascade se développe grâce aux contributions des structures qui l’utilisent et le gouvernent, dans la continuité de la licence Coopyleft.'
    }
  ]
})
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description">
    <UPageGrid class="sm:grid-cols-2 lg:grid-cols-3">
      <FeatureTile
        v-for="principle in principles"
        :key="principle.title"
        :icon="principle.icon"
        :title="principle.title"
        :description="principle.description"
        color="primary"
      />
    </UPageGrid>
  </UPageSection>
</template>
