<script setup lang="ts">
withDefaults(defineProps<{
  headline?: string
  title?: string
  paragraphs?: string[]
  usagesLabel?: string
  usages?: string[]
}>(), {
  headline: 'Le manifeste',
  title: 'Comprendre le modèle Cascade',
  paragraphs: () => [],
  usagesLabel: 'Ce texte peut servir :',
  usages: () => []
})
</script>

<template>
  <UPageSection :headline="headline" :title="title">
    <div class="mx-auto flex max-w-3xl flex-col gap-5 text-base text-toned">
      <p v-for="(p, i) in paragraphs" :key="i">{{ p }}</p>
    </div>

    <div v-if="usages.length" class="mx-auto mt-8 max-w-3xl rounded-lg bg-elevated/50 p-6">
      <p class="font-semibold text-highlighted">{{ usagesLabel }}</p>
      <ul class="mt-3 flex flex-col gap-2">
        <li v-for="(u, i) in usages" :key="i" class="flex items-start gap-2 text-sm text-toned">
          <UIcon name="i-lucide-check" class="mt-0.5 size-4 shrink-0 text-primary" />
          {{ u }}
        </li>
      </ul>
    </div>
  </UPageSection>
</template>
