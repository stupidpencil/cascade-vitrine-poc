<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  description?: string
  ctaLabel?: string
}>()

const { open: openContactModal } = useContactModal()
</script>

<template>
  <div class="relative">
    <WaveDecoration side="left" />
    <WaveDecoration side="right" />

    <UPageHero :headline="headline" :title="title" :description="description" orientation="horizontal">
      <template #links>
        <UButton v-if="ctaLabel" trailing-icon="i-lucide-arrow-right" size="lg" @click="openContactModal">
          {{ ctaLabel }}
        </UButton>
      </template>

      <AppMockupLifecycleTiles />
    </UPageHero>
  </div>
</template>
