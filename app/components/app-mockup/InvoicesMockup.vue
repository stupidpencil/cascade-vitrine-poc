<script setup lang="ts">
type Row = { label: string, org: string, amount: string, status: string, color: 'success' | 'neutral' | 'error' }

const DATA: Record<FeatureScenarioKey, { subtitle: string, rows: Row[] }> = {
  'tiers-lieux': {
    subtitle: 'Tiers-lieu La Grange — 4 en cours',
    rows: [
      { label: 'Facture #2024-114', org: 'La Filature Coop', amount: '480 €', status: 'Payée', color: 'success' },
      { label: 'Facture #2024-113', org: 'Atelier Nomade', amount: '340 €', status: 'Émise', color: 'neutral' },
      { label: 'Facture #2024-112', org: 'Collectif Lisière', amount: '210 €', status: 'Payée', color: 'success' },
      { label: 'Facture #2024-110', org: 'Studio Kerne', amount: '260 €', status: 'En retard', color: 'error' }
    ]
  },
  cooperatives: {
    subtitle: 'Coopérative Lieux Vivants — 4 en cours',
    rows: [
      { label: 'Facture #2024-214', org: 'Lucas Martin', amount: '50 €', status: 'Payée', color: 'success' },
      { label: 'Facture #2024-213', org: 'Sophie Dubois', amount: '50 €', status: 'Émise', color: 'neutral' },
      { label: 'Facture #2024-212', org: 'Atelier Nomade', amount: '150 €', status: 'Payée', color: 'success' },
      { label: 'Facture #2024-210', org: 'Studio Kerne', amount: '50 €', status: 'En retard', color: 'error' }
    ]
  },
  ateliers: {
    subtitle: 'Atelier Les Mains Vertes — 4 en cours',
    rows: [
      { label: 'Facture #2024-314', org: 'Marie Petit', amount: '18 €', status: 'Payée', color: 'success' },
      { label: 'Facture #2024-313', org: 'Thomas Roy', amount: '24 €', status: 'Émise', color: 'neutral' },
      { label: 'Facture #2024-312', org: 'Léa Fontaine', amount: '30 €', status: 'Payée', color: 'success' },
      { label: 'Facture #2024-310', org: 'Studio Kerne', amount: '18 €', status: 'En retard', color: 'error' }
    ]
  },
  amap: {
    subtitle: 'AMAP des Trois Sillons — 4 en cours',
    rows: [
      { label: 'Facture #2024-414', org: 'Famille Nguyen', amount: '18 €', status: 'Payée', color: 'success' },
      { label: 'Facture #2024-413', org: 'Camille Vidal', amount: '24 €', status: 'Émise', color: 'neutral' },
      { label: 'Facture #2024-412', org: 'Marc Aubert', amount: '12 €', status: 'Payée', color: 'success' },
      { label: 'Facture #2024-410', org: 'Yasmine Foucher', amount: '6 €', status: 'En retard', color: 'error' }
    ]
  },
  creche: {
    subtitle: 'Crèche « Les petits fripons » — 4 en cours',
    rows: [
      { label: 'Facture #2024-514', org: 'Famille Haddad', amount: '780 €', status: 'Payée', color: 'success' },
      { label: 'Facture #2024-513', org: 'Famille Rousseau', amount: '480 €', status: 'Émise', color: 'neutral' },
      { label: 'Facture #2024-512', org: 'Famille Morel', amount: '320 €', status: 'Payée', color: 'success' },
      { label: 'Facture #2024-510', org: 'Famille Petit', amount: '160 €', status: 'En retard', color: 'error' }
    ]
  },
  fanfare: {
    subtitle: 'Fanfare du Faubourg — 4 en cours',
    rows: [
      { label: 'Facture #2024-614', org: 'Nora Benali', amount: '90 €', status: 'Payée', color: 'success' },
      { label: 'Facture #2024-613', org: 'Julien Costa', amount: '70 €', status: 'Émise', color: 'neutral' },
      { label: 'Facture #2024-612', org: 'Inès Lambert', amount: '110 €', status: 'Payée', color: 'success' },
      { label: 'Facture #2024-610', org: 'Yanis Roche', amount: '40 €', status: 'En retard', color: 'error' }
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
      <span class="ml-3 text-xs text-dimmed">cascade.app — Facturation</span>
    </div>

    <div class="flex flex-col gap-4 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-highlighted">Factures</p>
          <p class="text-xs text-muted">{{ data.subtitle }}</p>
        </div>
        <UButton size="xs" color="neutral" variant="subtle" icon="i-lucide-plus" class="shrink-0 whitespace-nowrap">
          Nouvelle facture
        </UButton>
      </div>

      <div class="flex flex-col gap-2">
        <div
          v-for="row in data.rows"
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
