<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  description?: string
  ctaLabel?: string
  ctaTo?: string
}>()

const localePath = useLocalePath()
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
    <template v-if="ctaTo" #links>
      <UButton :to="localePath(ctaTo)" trailing-icon="i-lucide-arrow-right">
        {{ ctaLabel }}
      </UButton>
    </template>
  </UPageCTA>
</template>
