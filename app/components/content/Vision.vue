<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <UPageSection class="bg-inverted">
    <div class="mx-auto max-w-3xl text-center">
      <h2 class="text-3xl font-semibold tracking-tight text-inverted sm:text-4xl">
        {{ title }}
      </h2>
      <p class="mt-6 text-lg text-inverted" style="opacity: 0.7">
        {{ description }}
      </p>
    </div>
  </UPageSection>
</template>
