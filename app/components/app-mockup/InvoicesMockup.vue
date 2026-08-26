<script setup lang="ts">
const rows = [
  { label: 'Facture #2024-114', org: 'La Filature Coop', amount: '480 €', status: 'Payée', color: 'success' as const },
  { label: 'Facture #2024-113', org: 'Atelier Nomade', amount: '340 €', status: 'Émise', color: 'neutral' as const },
  { label: 'Facture #2024-112', org: 'Collectif Lisière', amount: '210 €', status: 'Payée', color: 'success' as const },
  { label: 'Facture #2024-110', org: 'Studio Kerne', amount: '260 €', status: 'En retard', color: 'error' as const }
]
</script>

<template>
  <div class="w-full overflow-hidden rounded-xl border border-default bg-default shadow-2xl">
    <div class="flex items-center gap-1.5 border-b border-default bg-elevated/50 px-4 py-2.5">
      <span class="size-2.5 rounded-full bg-error/60" />
      <span class="size-2.5 rounded-full bg-warning/60" />
      <span class="size-2.5 rounded-full bg-success/60" />
      <span class="ml-3 text-xs text-dimmed">cascade.app — Facturation</span>
    </div>

    <div class="flex flex-col gap-4 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-highlighted">Factures</p>
          <p class="text-xs text-muted">Tiers-lieu La Grange — 4 en cours</p>
        </div>
        <UButton size="xs" color="neutral" variant="subtle" icon="i-lucide-plus" class="shrink-0 whitespace-nowrap">
          Nouvelle facture
        </UButton>
      </div>

      <div class="flex flex-col gap-2">
        <div
          v-for="row in rows"
          :key="row.label"
          class="flex items-center justify-between gap-3 rounded-lg border border-default px-3 py-2.5"
        >
          <div class="min-w-0">
            <p class="truncate text-sm font-medium text-highlighted">{{ row.label }}</p>
            <p class="truncate text-xs text-muted">{{ row.org }}</p>
          </div>
          <div class="flex shrink-0 items-center gap-3">
            <span class="text-sm text-toned">{{ row.amount }}</span>
            <UBadge :color="row.color" variant="subtle" size="sm">{{ row.status }}</UBadge>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
