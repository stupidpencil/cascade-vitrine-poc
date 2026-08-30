<script setup lang="ts">
const parts = [
  { label: 'Part de base', amount: '6 €', hint: 'fixe, quel que soit le nombre de contributeurs' },
  { label: 'Part d’activité', amount: '2 €', hint: 'proportionnelle à l’usage' },
  { label: 'Part activité réseau', amount: '0,70 €', hint: 'contribution aux cascades connectées' },
  { label: 'Surcotisation', amount: '0,30 €', hint: 'volontaire' }
]
</script>

<template>
  <div class="w-full overflow-hidden rounded-xl border border-default bg-default shadow-2xl">
    <div class="flex items-center gap-1.5 border-b border-default bg-elevated/50 px-4 py-2.5">
      <span class="size-2.5 rounded-full bg-error/60" />
      <span class="size-2.5 rounded-full bg-warning/60" />
      <span class="size-2.5 rounded-full bg-success/60" />
      <span class="ml-3 text-xs text-dimmed">cascade.coop — Cascade « Atelier partagé »</span>
    </div>

    <div class="flex flex-col gap-5 p-4 sm:p-6">
      <div>
        <p class="text-sm font-medium text-highlighted">Objectif du cycle</p>
        <p class="text-2xl font-semibold text-highlighted">100 €</p>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div class="rounded-lg border border-default p-3">
          <p class="text-xs text-muted">10 contributeurs</p>
          <p class="mt-1 text-xl font-semibold text-highlighted">10 € <span class="text-sm font-normal text-muted">/ chacun</span></p>
        </div>
        <div class="rounded-lg border border-primary/30 bg-primary/5 p-3">
          <p class="text-xs text-muted">11 contributeurs</p>
          <p class="mt-1 text-xl font-semibold text-highlighted">9 € <span class="text-sm font-normal text-muted">/ chacun</span></p>
          <UBadge color="primary" variant="subtle" size="sm" class="mt-1">Ajusté automatiquement</UBadge>
        </div>
      </div>

      <div>
        <p class="mb-2 text-xs font-medium text-muted">Composition de la contribution (par contributeur)</p>
        <div class="flex flex-col gap-2">
          <div
            v-for="part in parts"
            :key="part.label"
            class="flex items-center justify-between gap-3 rounded-lg border border-default px-3 py-2"
          >
            <div class="min-w-0">
              <p class="truncate text-sm font-medium text-highlighted">{{ part.label }}</p>
              <p class="truncate text-xs text-muted">{{ part.hint }}</p>
            </div>
            <p class="shrink-0 text-sm font-medium text-highlighted">{{ part.amount }}</p>
          </div>
          <div class="flex items-center justify-between gap-3 rounded-lg bg-elevated/50 px-3 py-2">
            <p class="text-sm font-semibold text-highlighted">Total</p>
            <p class="text-sm font-semibold text-highlighted">9 €</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
