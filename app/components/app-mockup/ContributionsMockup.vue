<script setup lang="ts">
type Item = { label: string, type: string, amount: string, period: string }

const DATA: Record<FeatureScenarioKey, { subtitle: string, items: Item[] }> = {
  'tiers-lieux': {
    subtitle: 'Contributions — Atelier Nomade',
    items: [
      { label: 'Loyer de base', type: 'Fixe', amount: '340 €', period: '/ mois' },
      { label: 'Charges communes', type: 'Adaptative', amount: '38 — 62 €', period: '/ mois' },
      { label: 'Atelier bois — usage', type: 'Ponctuelle', amount: '15 €', period: '/ session' }
    ]
  },
  cooperatives: {
    subtitle: 'Contributions — Lucas Martin',
    items: [
      { label: 'Part sociale', type: 'Fixe', amount: '50 €', period: '/ an' },
      { label: 'Fonds de mutualisation', type: 'Adaptative', amount: '10 — 25 €', period: '/ mois' },
      { label: 'Réservation salle', type: 'Ponctuelle', amount: '25 €', period: '/ demi-jour' }
    ]
  },
  ateliers: {
    subtitle: 'Contributions — Marie Petit',
    items: [
      { label: 'Adhésion atelier', type: 'Fixe', amount: '18 €', period: '/ mois' },
      { label: 'Consommables partagés', type: 'Adaptative', amount: '5 — 12 €', period: '/ mois' },
      { label: 'Machine à bois — usage', type: 'Ponctuelle', amount: '6 €', period: '/ heure' }
    ]
  },
  amap: {
    subtitle: 'Contributions — Camille Vidal',
    items: [
      { label: 'Panier légumes', type: 'Fixe', amount: '18 €', period: '/ semaine' },
      { label: 'Panier solidaire', type: 'Adaptative', amount: '8 — 16 €', period: '/ semaine' },
      { label: 'Œufs — supplément', type: 'Ponctuelle', amount: '3 €', period: '/ semaine' }
    ]
  },
  creche: {
    subtitle: 'Contributions — Famille Haddad',
    items: [
      { label: 'Accueil régulier', type: 'Fixe', amount: '780 €', period: '/ mois' },
      { label: 'Compensation garde manquée', type: 'Adaptative', amount: '15 — 45 €', period: '/ mois' },
      { label: 'Activité éveil', type: 'Ponctuelle', amount: '8 €', period: '/ session' }
    ]
  },
  fanfare: {
    subtitle: 'Contributions — Inès Lambert',
    items: [
      { label: 'Cotisation annuelle', type: 'Fixe', amount: '90 €', period: '/ an' },
      { label: 'Location tuba', type: 'Adaptative', amount: '10 — 20 €', period: '/ mois' },
      { label: 'Concert du festival — frais', type: 'Ponctuelle', amount: '12 €', period: '/ session' }
    ]
  }
}

const scenario = useFeatureScenario()
const data = computed(() => DATA[scenario.value])
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
      <p class="text-sm font-medium text-highlighted">{{ data.subtitle }}</p>

      <div
        v-for="item in data.items"
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
