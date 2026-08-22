<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  description?: string
}>()
</script>

<template>
  <UContainer>
    <UPageHeader :headline="headline" :title="title" :description="description" />
  </UContainer>
</template>
