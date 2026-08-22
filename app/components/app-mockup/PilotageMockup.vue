<script setup lang="ts">
const stats = [
  { label: 'Ressources actives', value: '12' },
  { label: 'Contributions / mois', value: '4 280 €' },
  { label: 'Factures en attente', value: '2' }
]
</script>

<template>
  <div class="w-full overflow-hidden rounded-xl border border-default bg-default shadow-2xl">
    <div class="flex items-center gap-1.5 border-b border-default bg-elevated/50 px-4 py-2.5">
      <span class="size-2.5 rounded-full bg-error/60" />
      <span class="size-2.5 rounded-full bg-warning/60" />
      <span class="size-2.5 rounded-full bg-success/60" />
      <span class="ml-3 text-xs text-dimmed">cascade.app — Pilotage</span>
    </div>

    <div class="flex flex-col gap-4 p-4 sm:p-6">
      <div class="grid grid-cols-3 gap-3">
        <div v-for="stat in stats" :key="stat.label" class="rounded-lg border border-default p-3">
          <p class="text-lg font-semibold text-highlighted">{{ stat.value }}</p>
          <p class="mt-1 text-xs text-muted">{{ stat.label }}</p>
        </div>
      </div>

      <div class="rounded-lg border border-default p-3">
        <p class="text-xs text-muted">Contributions perçues — 6 derniers mois</p>
        <div class="mt-3 flex items-end gap-2">
          <div
            v-for="(h, i) in [40, 55, 48, 62, 58, 70]"
            :key="i"
            class="flex-1 rounded-t bg-primary"
            :style="{ height: `${h}px`, opacity: 0.75 }"
          />
        </div>
      </div>
    </div>
  </div>
</template>
