<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
  primaryCtaLabel?: string
  primaryCtaTo?: string
  secondaryCtaLabel?: string
}>()

const { open: openContactModal } = useContactModal()
</script>

<template>
  <UPageCTA :title="title" :description="description" :ui="{ root: 'rounded-none' }">
    <template #links>
      <UButton v-if="primaryCtaTo" :to="primaryCtaTo" trailing-icon="i-lucide-arrow-right" size="lg">
        {{ primaryCtaLabel }}
      </UButton>
      <UButton v-if="secondaryCtaLabel" color="neutral" variant="subtle" size="lg" @click="openContactModal">
        {{ secondaryCtaLabel }}
      </UButton>
    </template>
  </UPageCTA>
</template>
