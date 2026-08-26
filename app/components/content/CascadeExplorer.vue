<script setup lang="ts">
interface Tab {
  value: string
  label: string
  icon?: string
  tag: string
  title: string
  description: string
  needs?: string[]
  type?: 'flagship' | 'default' | 'adaptive'
}

withDefaults(defineProps<{
  tabs?: Tab[]
}>(), {
  tabs: () => [
    {
      value: 'tiers-lieux',
      label: 'Tiers-lieux',
      icon: 'i-lucide-map-pin-house',
      tag: 'Cas d’usage phare',
      title: 'Occupation temporaire / tiers-lieux',
      description: 'Le cas d’usage le plus concret de Cascade aujourd’hui.',
      needs: [
        'Gérer plusieurs occupants',
        'Contractualiser des espaces',
        'Gérer les avenants',
        'Répartir les contributions',
        'Facturer',
        'Suivre les paiements'
      ],
      type: 'flagship'
    },
    {
      value: 'cooperatives',
      label: 'Coopératives',
      icon: 'i-lucide-building-2',
      tag: 'Extension possible',
      title: 'Coopératives',
      description: 'Mutualiser des ressources et des règles de contribution entre coopérateurs, avec la même rigueur contractuelle que pour un tiers-lieu.',
      type: 'default'
    },
    {
      value: 'ateliers-collectifs',
      label: 'Ateliers & collectifs',
      icon: 'i-lucide-hammer',
      tag: 'Extension possible',
      title: 'Ateliers partagés & collectifs',
      description: 'Répartir l’usage d’un espace ou d’un équipement mutualisé entre plusieurs membres, avec un suivi transparent des contributions de chacun.',
      type: 'default'
    },
    {
      value: 'lieux-culturels',
      label: 'Lieux culturels',
      icon: 'i-lucide-drama',
      tag: 'Extension possible',
      title: 'Lieux culturels',
      description: 'Gérer résidences, occupations temporaires et contributions d’un lieu culturel géré collectivement.',
      type: 'default'
    },
    {
      value: 'contribution-adaptative',
      label: 'Contribution adaptative',
      icon: 'i-lucide-sliders-horizontal',
      tag: 'Le modèle Cascade',
      title: 'Et si le prix pouvait s’adapter aux besoins réels ?',
      description: 'Les contributions peuvent être ajustées en fonction des besoins réels du collectif et des règles décidées ensemble — pas d’un tarif figé décidé d’avance.',
      type: 'adaptive'
    }
  ]
})
</script>

<template>
  <UPageSection>
    <UTabs
      :items="tabs"
      :default-value="tabs[0]?.value"
      variant="pill"
      color="neutral"
      class="w-full"
      :ui="{ list: 'overflow-x-auto flex-nowrap justify-start', trigger: 'shrink-0' }"
    >
      <template #content="{ item }">
        <div class="pt-8">
          <UBadge color="primary" variant="subtle" size="sm" class="mb-3">
            {{ item.tag }}
          </UBadge>
          <h3 class="text-2xl font-semibold text-highlighted sm:text-3xl">
            {{ item.title }}
          </h3>
          <p class="mt-3 max-w-2xl text-muted">
            {{ item.description }}
          </p>

          <UPageGrid v-if="item.type === 'flagship'" class="mt-6 sm:grid-cols-2">
            <div v-for="need in item.needs" :key="need" class="flex items-center gap-2 text-sm text-toned">
              <UIcon name="i-lucide-check" class="size-4 shrink-0 text-primary" />
              {{ need }}
            </div>
          </UPageGrid>

          <div v-else-if="item.type === 'adaptive'" class="mt-8">
            <AppMockupAdaptiveContributionDiagram />
          </div>
        </div>
      </template>
    </UTabs>
  </UPageSection>
</template>
