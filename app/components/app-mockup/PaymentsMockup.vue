<script setup lang="ts">
type Row = { label: string, org: string, date: string, status: string, color: 'success' | 'warning', icon: string }

const DATA: Record<FeatureScenarioKey, Row[]> = {
  'tiers-lieux': [
    { label: 'Prélèvement SEPA', org: 'Atelier Nomade — 340 €', date: '05 mars', status: 'Rapproché', color: 'success', icon: 'i-lucide-landmark' },
    { label: 'Virement', org: 'La Filature Coop — 480 €', date: '03 mars', status: 'Rapproché', color: 'success', icon: 'i-lucide-arrow-left-right' },
    { label: 'Carte bancaire', org: 'Studio Kerne — 260 €', date: 'En attente', status: 'À rapprocher', color: 'warning', icon: 'i-lucide-credit-card' }
  ],
  cooperatives: [
    { label: 'Virement', org: 'Lucas Martin — 50 €', date: '05 mars', status: 'Rapproché', color: 'success', icon: 'i-lucide-arrow-left-right' },
    { label: 'Prélèvement SEPA', org: 'Atelier Nomade — 150 €', date: '03 mars', status: 'Rapproché', color: 'success', icon: 'i-lucide-landmark' },
    { label: 'Espèces', org: 'Sophie Dubois — 50 €', date: 'En attente', status: 'À rapprocher', color: 'warning', icon: 'i-lucide-banknote' }
  ],
  ateliers: [
    { label: 'Carte bancaire', org: 'Marie Petit — 18 €', date: '05 mars', status: 'Rapproché', color: 'success', icon: 'i-lucide-credit-card' },
    { label: 'Prélèvement SEPA', org: 'Thomas Roy — 24 €', date: '03 mars', status: 'Rapproché', color: 'success', icon: 'i-lucide-landmark' },
    { label: 'Espèces', org: 'Léa Fontaine — 30 €', date: 'En attente', status: 'À rapprocher', color: 'warning', icon: 'i-lucide-banknote' }
  ],
  amap: [
    { label: 'Prélèvement SEPA', org: 'Famille Nguyen — 18 €', date: '05 mars', status: 'Rapproché', color: 'success', icon: 'i-lucide-landmark' },
    { label: 'Espèces', org: 'Camille Vidal — 24 €', date: '03 mars', status: 'Rapproché', color: 'success', icon: 'i-lucide-banknote' },
    { label: 'Virement', org: 'Marc Aubert — 12 €', date: 'En attente', status: 'À rapprocher', color: 'warning', icon: 'i-lucide-arrow-left-right' }
  ],
  creche: [
    { label: 'Prélèvement SEPA', org: 'Famille Haddad — 780 €', date: '05 mars', status: 'Rapproché', color: 'success', icon: 'i-lucide-landmark' },
    { label: 'Virement', org: 'Famille Rousseau — 480 €', date: '03 mars', status: 'Rapproché', color: 'success', icon: 'i-lucide-arrow-left-right' },
    { label: 'Carte bancaire', org: 'Famille Morel — 320 €', date: 'En attente', status: 'À rapprocher', color: 'warning', icon: 'i-lucide-credit-card' }
  ],
  fanfare: [
    { label: 'Virement', org: 'Nora Benali — 90 €', date: '05 mars', status: 'Rapproché', color: 'success', icon: 'i-lucide-arrow-left-right' },
    { label: 'Espèces', org: 'Julien Costa — 70 €', date: '03 mars', status: 'Rapproché', color: 'success', icon: 'i-lucide-banknote' },
    { label: 'Prélèvement SEPA', org: 'Inès Lambert — 110 €', date: 'En attente', status: 'À rapprocher', color: 'warning', icon: 'i-lucide-landmark' }
  ]
}

const scenario = useFeatureScenario()
const rows = computed(() => DATA[scenario.value])
</script>

<template>
  <div class="w-full overflow-hidden rounded-xl border border-default bg-default shadow-2xl">
    <div class="flex items-center gap-1.5 border-b border-default bg-elevated/50 px-4 py-2.5">
      <span class="size-2.5 rounded-full bg-error/60" />
      <span class="size-2.5 rounded-full bg-warning/60" />
      <span class="size-2.5 rounded-full bg-success/60" />
      <span class="ml-3 text-xs text-dimmed">cascade.coop — Paiements</span>
    </div>

    <div class="flex flex-col gap-4 p-4 sm:p-6">
      <p class="text-sm font-medium text-highlighted">Paiements reçus — cette semaine</p>

      <div class="flex flex-col gap-2">
        <div
          v-for="row in rows"
          :key="row.label"
          class="flex items-center gap-3 rounded-lg border border-default px-3 py-2.5"
        >
          <div class="flex size-8 shrink-0 items-center justify-center rounded-full bg-elevated">
            <UIcon :name="row.icon" class="size-4 text-muted" />
          </div>
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-medium text-highlighted">{{ row.label }}</p>
            <p class="truncate text-xs text-muted">{{ row.org }}</p>
          </div>
          <div class="flex shrink-0 flex-col items-end gap-1">
            <span class="text-xs text-dimmed">{{ row.date }}</span>
            <UBadge :color="row.color" variant="subtle" size="sm">{{ row.status }}</UBadge>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
