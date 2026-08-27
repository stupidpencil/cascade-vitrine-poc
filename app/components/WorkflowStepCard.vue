<script setup lang="ts">
defineProps<{
  icon: string
  label: string
  example: string
  automation: string
}>()
</script>

<template>
  <div class="flex flex-1 flex-col items-center gap-2 rounded-lg border border-default bg-default px-4 py-5 text-center">
    <UIcon :name="icon" class="size-6 text-primary" />
    <p class="text-sm font-medium text-highlighted">{{ label }}</p>
    <p class="text-xs text-muted">{{ example }}</p>
    <div class="mt-auto flex items-start gap-1 pt-1 text-xs font-medium text-primary">
      <UIcon name="i-lucide-zap" class="mt-0.5 size-3.5 shrink-0" />
      <span>{{ automation }}</span>
    </div>
  </div>
</template>
