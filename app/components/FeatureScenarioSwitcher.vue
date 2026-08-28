<script setup lang="ts">
const scenario = useFeatureScenario()

const items = FEATURE_SCENARIOS.map(s => ({ value: s.key, label: s.label, icon: s.icon }))
</script>

<template>
  <div class="sticky top-[var(--ui-header-height)] z-10 w-full border-b border-default bg-default/85 backdrop-blur">
    <div class="mx-auto flex w-full max-w-(--ui-container) flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <div>
        <p class="text-sm font-semibold text-highlighted">Un scénario, plusieurs usages</p>
        <p class="text-sm text-muted">Cascade appliqué à d’autres cas d’usage que l’occupation temporaire.</p>
      </div>

      <UTabs
        v-model="scenario"
        :items="items"
        variant="pill"
        color="neutral"
        size="sm"
        class="w-fit shrink-0"
        :ui="{ list: 'flex-nowrap' }"
      />
    </div>
  </div>
</template>
