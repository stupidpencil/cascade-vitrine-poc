<script setup lang="ts">
withDefaults(defineProps<{
  headline?: string
  title?: string
  intro?: string[]
  imbalancesLabel?: string
  imbalances?: string[]
  surplusOriginsLabel?: string
  surplusOrigins?: string[]
  cycleEffectsIntro?: string
  cycleEffects?: string[]
  conclusion?: string[]
}>(), {
  headline: 'La redistribution',
  intro: () => [],
  imbalances: () => [],
  surplusOrigins: () => [],
  cycleEffects: () => [],
  conclusion: () => []
})
</script>

<template>
  <UPageSection :headline="headline" :title="title">
    <div class="mx-auto flex max-w-3xl flex-col gap-6">
      <div class="flex flex-col gap-5 text-base text-toned">
        <p v-for="(p, i) in intro" :key="i">{{ p }}</p>
      </div>

      <div v-if="imbalances.length" class="rounded-lg bg-elevated/50 p-6">
        <p v-if="imbalancesLabel" class="font-semibold text-highlighted">{{ imbalancesLabel }}</p>
        <ul class="mt-3 flex flex-col gap-2">
          <li v-for="(item, i) in imbalances" :key="i" class="flex items-start gap-2 text-sm text-toned">
            <UIcon name="i-lucide-scale" class="mt-0.5 size-4 shrink-0 text-primary" />
            {{ item }}
          </li>
        </ul>
      </div>

      <div v-if="surplusOrigins.length" class="rounded-lg bg-elevated/50 p-6">
        <p v-if="surplusOriginsLabel" class="font-semibold text-highlighted">{{ surplusOriginsLabel }}</p>
        <ul class="mt-3 flex flex-col gap-2">
          <li v-for="(item, i) in surplusOrigins" :key="i" class="flex items-start gap-2 text-sm text-toned">
            <UIcon name="i-lucide-plus-circle" class="mt-0.5 size-4 shrink-0 text-primary" />
            {{ item }}
          </li>
        </ul>
      </div>

      <div v-if="cycleEffects.length">
        <p v-if="cycleEffectsIntro" class="text-base text-toned">{{ cycleEffectsIntro }}</p>
        <ul class="mt-3 flex flex-col gap-2">
          <li v-for="(item, i) in cycleEffects" :key="i" class="flex items-start gap-2 text-toned">
            <UIcon name="i-lucide-repeat" class="mt-1.5 size-3.5 shrink-0 text-primary" />
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="flex flex-col gap-5 text-base text-toned">
        <p v-for="(p, i) in conclusion" :key="i">{{ p }}</p>
      </div>
    </div>
  </UPageSection>
</template>
