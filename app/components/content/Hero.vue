<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  description?: string
  primaryCtaLabel?: string
  primaryCtaTo?: string
  secondaryCtaLabel?: string
}>()

const { open: openContactModal } = useContactModal()
</script>

<template>
  <div class="relative">
    <WaveDecoration side="left" />
    <WaveDecoration side="right" />

    <UPageHero :headline="headline" :title="title" :description="description" orientation="horizontal">
      <template #links>
        <UButton v-if="primaryCtaTo" :to="primaryCtaTo" trailing-icon="i-lucide-arrow-right" size="lg">
          {{ primaryCtaLabel }}
        </UButton>
        <UButton v-if="secondaryCtaLabel" color="neutral" variant="subtle" size="lg" @click="openContactModal">
          {{ secondaryCtaLabel }}
        </UButton>
      </template>

      <AppMockupLifecycleTiles />
    </UPageHero>
  </div>
</template>
