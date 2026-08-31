<script setup lang="ts">
interface Attribute {
  title: string
  paragraphs: string[]
  list?: string[]
  paragraphsAfterList?: string[]
}

withDefaults(defineProps<{
  headline?: string
  title?: string
  intro?: string[]
  attributes?: Attribute[]
  conclusion?: string[]
}>(), {
  intro: () => [],
  attributes: () => [],
  conclusion: () => []
})
</script>

<template>
  <UPageSection :headline="headline" :title="title">
    <div class="mx-auto flex max-w-3xl flex-col gap-5 text-base text-toned">
      <p v-for="(p, i) in intro" :key="i">{{ p }}</p>
    </div>

    <div class="mx-auto mt-12 flex max-w-3xl flex-col gap-10">
      <template v-for="(attr, i) in attributes" :key="attr.title">
        <div class="flex gap-4">
          <div class="flex size-9 shrink-0 items-center justify-center rounded-full bg-elevated text-sm font-semibold text-primary">
            {{ i + 1 }}
          </div>
          <div class="flex min-w-0 flex-1 flex-col gap-3">
            <h3 class="text-lg font-semibold text-highlighted">{{ attr.title }}</h3>
            <p v-for="(p, j) in attr.paragraphs" :key="j" class="text-toned">{{ p }}</p>

            <ul v-if="attr.list?.length" class="flex flex-col gap-2">
              <li v-for="(item, j) in attr.list" :key="j" class="flex items-start gap-2 text-toned">
                <UIcon name="i-lucide-minus" class="mt-1.5 size-3 shrink-0 text-primary" />
                {{ item }}
              </li>
            </ul>

            <p v-for="(p, j) in attr.paragraphsAfterList" :key="'after' + j" class="text-toned">{{ p }}</p>

            <div v-if="i === 1" class="mt-2 w-full">
              <AppMockupContributionMechanicMockup />
            </div>
          </div>
        </div>
      </template>
    </div>

    <div class="mx-auto mt-12 flex max-w-3xl flex-col gap-5 text-base text-toned">
      <p v-for="(p, i) in conclusion" :key="i">{{ p }}</p>
    </div>
  </UPageSection>
</template>
