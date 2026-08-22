<script setup lang="ts">
const items = [
  { label: 'Loyer de base', type: 'Fixe', amount: '340 €', period: '/ mois' },
  { label: 'Charges communes', type: 'Adaptative', amount: '38 — 62 €', period: '/ mois' },
  { label: 'Atelier bois — usage', type: 'Ponctuelle', amount: '15 €', period: '/ session' }
]
</script>

<template>
  <div class="w-full overflow-hidden rounded-xl border border-default bg-default shadow-2xl">
    <div class="flex items-center gap-1.5 border-b border-default bg-elevated/50 px-4 py-2.5">
      <span class="size-2.5 rounded-full bg-error/60" />
      <span class="size-2.5 rounded-full bg-warning/60" />
      <span class="size-2.5 rounded-full bg-success/60" />
      <span class="ml-3 text-xs text-dimmed">cascade.app — Contributions</span>
    </div>

    <div class="flex flex-col gap-3 p-4 sm:p-6">
      <p class="text-sm font-medium text-highlighted">Contributions — Atelier Nomade</p>

      <div
        v-for="item in items"
        :key="item.label"
        class="flex items-center justify-between gap-3 rounded-lg border border-default px-3 py-2.5"
      >
        <div class="min-w-0">
          <p class="truncate text-sm font-medium text-highlighted">{{ item.label }}</p>
          <UBadge color="neutral" variant="subtle" size="sm" class="mt-1">{{ item.type }}</UBadge>
        </div>
        <p class="shrink-0 text-sm text-muted">
          <span class="font-medium text-highlighted">{{ item.amount }}</span> {{ item.period }}
        </p>
      </div>
    </div>
  </div>
</template>
