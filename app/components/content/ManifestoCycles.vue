<script setup lang="ts">
interface CycleType {
  icon: string
  title: string
  description: string
}

withDefaults(defineProps<{
  headline?: string
  title?: string
  intro?: string[]
  types?: CycleType[]
  conclusion?: string[]
}>(), {
  intro: () => [],
  types: () => [],
  conclusion: () => []
})
</script>

<template>
  <UPageSection :headline="headline" :title="title">
    <div class="mx-auto flex max-w-3xl flex-col gap-5 text-base text-toned">
      <p v-for="(p, i) in intro" :key="i">{{ p }}</p>
    </div>

    <div class="mx-auto mt-8 max-w-3xl">
      <UPageGrid class="sm:grid-cols-2 lg:grid-cols-2">
        <FeatureTile
          v-for="type in types"
          :key="type.title"
          :icon="type.icon"
          :title="type.title"
          :description="type.description"
          color="primary"
        />
      </UPageGrid>
    </div>

    <div class="mx-auto mt-8 flex max-w-3xl flex-col gap-5 text-base text-toned">
      <p v-for="(p, i) in conclusion" :key="i">{{ p }}</p>
    </div>
  </UPageSection>
</template>
