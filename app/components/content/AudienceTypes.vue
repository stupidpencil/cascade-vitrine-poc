<script setup lang="ts">
interface OrgType {
  icon: string
  label: string
}

withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  types?: OrgType[]
}>(), {
  headline: 'Qui s’adresse à Cascade',
  title: 'Toute organisation qui sort du cadre de l’entreprise ordinaire.',
  description: 'Associations, coopératives, collectifs informels, syndicats, tiers-lieux… si vous gérez des ressources collectivement, Cascade est fait pour vous.',
  types: () => [
    { icon: 'i-lucide-heart-handshake', label: 'Associations' },
    { icon: 'i-lucide-building-2', label: 'Coopératives' },
    { icon: 'i-lucide-users-round', label: 'Collectifs informels' },
    { icon: 'i-lucide-flag', label: 'Syndicats' },
    { icon: 'i-lucide-map-pin-house', label: 'Tiers-lieux' },
    { icon: 'i-lucide-share-2', label: 'SCIC & SCOP' },
    { icon: 'i-lucide-home', label: 'Groupements d’habitants' },
    { icon: 'i-lucide-globe', label: 'Communs numériques ou fonciers' }
  ]
})
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description">
    <div class="flex flex-wrap justify-center gap-3">
      <UBadge
        v-for="type in types"
        :key="type.label"
        color="neutral"
        variant="subtle"
        size="lg"
        :icon="type.icon"
        class="px-4 py-2.5"
      >
        {{ type.label }}
      </UBadge>
    </div>
  </UPageSection>
</template>
