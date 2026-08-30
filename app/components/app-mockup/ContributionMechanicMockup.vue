<script setup lang="ts">
const OBJECTIVE = 100
const MIN_CONTRIBUTORS = 5
const MAX_CONTRIBUTORS = 25

const contributors = ref(10)

const share = computed(() => OBJECTIVE / contributors.value)
const shareRounded = computed(() => Math.round(share.value * 100) / 100)

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
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-highlighted">Objectif du cycle</p>
          <p class="text-2xl font-semibold text-highlighted">{{ OBJECTIVE }} €</p>
        </div>
        <div class="text-right">
          <p class="text-sm font-medium text-highlighted">Contribution / chacun</p>
          <p class="text-2xl font-semibold text-highlighted">
            {{ shareRounded.toLocaleString('fr-FR', { maximumFractionDigits: 2 }) }} €
          </p>
        </div>
      </div>

      <div class="rounded-lg border border-default p-4">
        <div class="mb-3 flex items-center justify-between">
          <p class="text-sm text-muted">Contributeurs actifs</p>
          <div class="flex items-center gap-2">
            <span class="text-lg font-semibold text-highlighted">{{ contributors }}</span>
            <UBadge color="primary" variant="subtle" size="sm">
              Ajusté automatiquement
            </UBadge>
          </div>
        </div>
        <USlider
          v-model="contributors"
          :min="MIN_CONTRIBUTORS"
          :max="MAX_CONTRIBUTORS"
          :step="1"
        />
        <div class="mt-1 flex justify-between text-xs text-dimmed">
          <span>{{ MIN_CONTRIBUTORS }}</span>
          <span>{{ MAX_CONTRIBUTORS }}</span>
        </div>
      </div>

      <div>
        <p class="mb-2 text-xs font-medium text-muted">Composition d’une contribution type (par contributeur)</p>
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
