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
  <UPageCTA variant="subtle" :ui="{ root: 'rounded-none' }">
    <template #header>
      <p class="mb-3 text-center text-sm font-semibold text-primary">{{ headline }}</p>
      <h2 class="text-3xl sm:text-4xl text-pretty tracking-tight font-bold text-highlighted text-center">
        {{ title }}
      </h2>
      <div class="text-base sm:text-lg text-muted text-center text-balance mt-4">
        {{ description }}
      </div>
    </template>
    <template #links>
      <UButton :to="ctaTo" trailing-icon="i-lucide-arrow-right">
        {{ ctaLabel }}
      </UButton>
    </template>
  </UPageCTA>
</template>
