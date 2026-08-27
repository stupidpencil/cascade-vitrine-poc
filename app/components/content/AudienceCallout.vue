<script setup lang="ts">
withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  ctaLabel?: string
  ctaTo?: string
}>(), {
  headline: 'Pour qui ?',
  title: 'Cascade s’adresse aux organisations collectives — pas aux entreprises ordinaires.',
  description: 'Associations, coopératives, collectifs informels, syndicats, tiers-lieux… si vous gérez des ressources collectivement, ce qui suit vous concerne.',
  ctaLabel: 'Découvrir si Cascade est pour vous',
  ctaTo: '/pour-qui'
})
</script>

<template>
  <UPageCTA :title="title" :description="description" variant="subtle">
    <template #top>
      <p class="mb-3 text-center text-sm font-semibold text-primary">{{ headline }}</p>
    </template>
    <template #links>
      <UButton :to="ctaTo" trailing-icon="i-lucide-arrow-right">
        {{ ctaLabel }}
      </UButton>
    </template>
  </UPageCTA>
</template>
