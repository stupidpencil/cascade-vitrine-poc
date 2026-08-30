<script setup lang="ts">
interface Objection {
  quote: string
  paragraphs: string[]
  list?: string[]
  paragraphsAfterList?: string[]
}

withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  objections?: Objection[]
}>(), {
  headline: 'Objections courantes',
  objections: () => []
})
</script>

<template>
  <UPageSection :headline="headline" :title="title" :description="description">
    <div class="mx-auto max-w-3xl">
      <UAccordion :items="objections.map(o => ({ label: o.quote }))">
        <template #content="{ index }">
          <div class="flex flex-col gap-4 pb-2">
            <p v-for="(p, j) in objections[index].paragraphs" :key="j" class="text-toned">{{ p }}</p>
            <ul v-if="objections[index].list?.length" class="flex flex-col gap-2">
              <li v-for="(item, j) in objections[index].list" :key="j" class="flex items-start gap-2 text-toned">
                <UIcon name="i-lucide-minus" class="mt-1.5 size-3 shrink-0 text-primary" />
                {{ item }}
              </li>
            </ul>
            <p v-for="(p, j) in objections[index].paragraphsAfterList" :key="'after' + j" class="text-toned">{{ p }}</p>
          </div>
        </template>
      </UAccordion>
    </div>
  </UPageSection>
</template>
