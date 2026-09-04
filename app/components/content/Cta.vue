<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
  ctaLabel?: string
}>()

const { open: openContactModal } = useContactModal()
</script>

<template>
  <UPageCTA :title="title" :description="description" :ui="{ root: 'rounded-none' }">
    <template #links>
      <UButton v-if="ctaLabel" trailing-icon="i-lucide-arrow-right" size="lg" @click="openContactModal">
        {{ ctaLabel }}
      </UButton>
    </template>
  </UPageCTA>
</template>
