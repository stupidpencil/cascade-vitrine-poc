<script setup lang="ts">
interface Partner {
  icon: string
  name: string
  description: string
}

withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  partners?: Partner[]
}>(), {
  headline: 'Partenaires fondateurs',
  title: 'Cascade est né des besoins concrets des acteurs de l’urbanisme transitoire.',
  description: 'La démarche est initiée par trois structures qui géraient déjà des lieux au quotidien, avant de mutualiser l’outil pour ne plus en dépendre chacune séparément.',
  partners: () => [
    {
      icon: 'i-lucide-building-2',
      name: 'Plateau Urbain',
      description: 'Coopérative d’urbanisme transitoire qui transforme des bâtiments vacants en espaces de travail abordables, avec des solutions d’hébergement d’urgence quand c’est possible.'
    },
    {
      icon: 'i-lucide-tent',
      name: 'Yes We Camp',
      description: 'Collectif qui crée et anime des lieux transitoires conviviaux, mêlant culture, inclusion et expérimentation.'
    },
    {
      icon: 'i-lucide-users-round',
      name: 'Communa',
      description: 'ASBL bruxelloise qui développe des occupations collectives et militantes pour faire des bâtiments vacants de véritables communs urbains.'
    }
  ]
})
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description">
    <UPageGrid class="sm:grid-cols-2 lg:grid-cols-3">
      <FeatureTile
        v-for="partner in partners"
        :key="partner.name"
        :icon="partner.icon"
        :title="partner.name"
        :description="partner.description"
        color="primary"
      />
    </UPageGrid>
  </UPageSection>
</template>
