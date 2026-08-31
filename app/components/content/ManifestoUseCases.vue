<script setup lang="ts">
interface UseCase {
  icon: string
  title: string
  paragraphs: string[]
  advantageLabel?: string
  advantage: string
}

withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  cases?: UseCase[]
}>(), {
  cases: () => []
})
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description">
    <UAccordion :items="cases.map(c => ({ label: c.title, icon: c.icon }))" class="mx-auto w-full max-w-3xl">
      <template #content="{ index }">
        <div class="flex flex-col gap-4 pb-2">
          <p v-for="(p, j) in cases[index].paragraphs" :key="j" class="text-toned">{{ p }}</p>
          <div class="flex items-start gap-2 rounded-lg bg-elevated/50 px-4 py-3.5 text-sm">
            <UIcon name="i-lucide-sparkles" class="mt-0.5 size-4 shrink-0 text-primary" />
            <span class="text-toned"><strong class="text-highlighted">{{ cases[index].advantageLabel }} :</strong> {{ cases[index].advantage }}</span>
          </div>
        </div>
      </template>
    </UAccordion>
  </UPageSection>
</template>
