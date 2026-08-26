<script setup lang="ts">
interface Extension {
  icon: string
  label: string
}

withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  caseIcon?: string
  caseTitle?: string
  caseDescription?: string
  needs?: string[]
  extensionsLabel?: string
  extensions?: Extension[]
}>(), {
  headline: 'Cas d’usage',
  title: 'Pensé pour les lieux et collectifs, extensible aux organisations qui mutualisent.',
  description: 'L’occupation temporaire et les tiers-lieux sont aujourd’hui le terrain le plus concret de Cascade.',
  caseIcon: 'i-lucide-map-pin-house',
  caseTitle: 'Occupation temporaire / tiers-lieux',
  caseDescription: 'Le cas d’usage le plus concret de Cascade aujourd’hui.',
  needs: () => [
    'Gérer plusieurs occupants',
    'Contractualiser des espaces',
    'Gérer les avenants',
    'Répartir les contributions',
    'Facturer',
    'Suivre les paiements'
  ],
  extensionsLabel: 'Extensions possibles',
  extensions: () => [
    { icon: 'i-lucide-building-2', label: 'Coopératives' },
    { icon: 'i-lucide-hammer', label: 'Ateliers partagés' },
    { icon: 'i-lucide-users-round', label: 'Collectifs' },
    { icon: 'i-lucide-drama', label: 'Lieux culturels' },
    { icon: 'i-lucide-shapes', label: 'Autres organisations mutualisant des ressources' }
  ]
})
</script>

<template>
  <UPageSection id="cas-usage" :headline="headline" :title="title" :description="description">
    <UPageCard
      :icon="caseIcon"
      :title="caseTitle"
      :description="caseDescription"
      highlight
      class="mb-8"
    >
      <UPageGrid class="mt-2 sm:grid-cols-2">
        <div v-for="need in needs" :key="need" class="flex items-center gap-2 text-sm text-toned">
          <UIcon name="i-lucide-check" class="size-4 shrink-0 text-primary" />
          {{ need }}
        </div>
      </UPageGrid>
    </UPageCard>

    <div>
      <p class="mb-4 text-sm text-muted">{{ extensionsLabel }}</p>
      <div class="flex flex-wrap gap-3">
        <UBadge
          v-for="ext in extensions"
          :key="ext.label"
          color="neutral"
          variant="subtle"
          size="lg"
          :icon="ext.icon"
          class="px-3 py-2"
        >
          {{ ext.label }}
        </UBadge>
      </div>
    </div>
  </UPageSection>
</template>
