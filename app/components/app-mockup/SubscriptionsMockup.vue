<script setup lang="ts">
type Row = { occupant: string, ressource: string, contribution: string, statut: string, color: 'success' | 'warning' | 'neutral' }

const DATA: Record<FeatureScenarioKey, { subtitle: string, rows: Row[] }> = {
  'tiers-lieux': {
    subtitle: 'Tiers-lieu La Grange — 4 occupants actifs',
    rows: [
      { occupant: 'Atelier Nomade', ressource: 'Bureau 12 — 18m²', contribution: '340 € / mois', statut: 'À jour', color: 'success' },
      { occupant: 'Collectif Lisière', ressource: 'Salle commune', contribution: '210 € / mois', statut: 'Avenant en cours', color: 'warning' },
      { occupant: 'La Filature Coop', ressource: 'Atelier bois', contribution: '480 € / mois', statut: 'À jour', color: 'success' },
      { occupant: 'Studio Kerne', ressource: 'Bureau 4 — 12m²', contribution: '260 € / mois', statut: 'En attente', color: 'neutral' }
    ]
  },
  cooperatives: {
    subtitle: 'Coopérative Lieux Vivants — 4 coopérateurs actifs',
    rows: [
      { occupant: 'Lucas Martin', ressource: 'Part sociale ×2', contribution: '100 € / an', statut: 'À jour', color: 'success' },
      { occupant: 'Sophie Dubois', ressource: 'Part sociale ×1', contribution: '50 € / an', statut: 'Avenant en cours', color: 'warning' },
      { occupant: 'Atelier Nomade', ressource: 'Part sociale ×3', contribution: '150 € / an', statut: 'À jour', color: 'success' },
      { occupant: 'Studio Kerne', ressource: 'Part sociale ×1', contribution: '50 € / an', statut: 'En attente', color: 'neutral' }
    ]
  },
  ateliers: {
    subtitle: 'Atelier Les Mains Vertes — 4 membres actifs',
    rows: [
      { occupant: 'Marie Petit', ressource: 'Établi 3', contribution: '18 € / mois', statut: 'À jour', color: 'success' },
      { occupant: 'Thomas Roy', ressource: 'Machine à bois', contribution: '24 € / mois', statut: 'Avenant en cours', color: 'warning' },
      { occupant: 'Léa Fontaine', ressource: 'Casier + établi 5', contribution: '30 € / mois', statut: 'À jour', color: 'success' },
      { occupant: 'Studio Kerne', ressource: 'Établi 1', contribution: '18 € / mois', statut: 'En attente', color: 'neutral' }
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
      <span class="ml-3 text-xs text-dimmed">cascade.app — Souscriptions</span>
    </div>

    <div class="flex flex-col gap-4 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-highlighted">Souscriptions en cours</p>
          <p class="text-xs text-muted">{{ data.subtitle }}</p>
        </div>
        <UButton size="xs" color="neutral" variant="subtle" icon="i-lucide-plus" class="shrink-0 whitespace-nowrap">
          Nouvelle souscription
        </UButton>
      </div>

      <div class="overflow-hidden rounded-lg border border-default">
        <table class="w-full text-left text-sm">
          <thead class="bg-elevated/50 text-xs text-muted">
            <tr>
              <th class="px-3 py-2 font-medium">Contributeur</th>
              <th class="hidden px-3 py-2 font-medium sm:table-cell">Ressource</th>
              <th class="px-3 py-2 font-medium">Contribution</th>
              <th class="px-3 py-2 font-medium">Statut</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-default">
            <tr v-for="row in data.rows" :key="row.occupant">
              <td class="px-3 py-2.5 font-medium text-highlighted">{{ row.occupant }}</td>
              <td class="hidden px-3 py-2.5 text-muted sm:table-cell">{{ row.ressource }}</td>
              <td class="px-3 py-2.5 text-muted">{{ row.contribution }}</td>
              <td class="px-3 py-2.5">
                <UBadge :color="row.color" variant="subtle" size="sm">{{ row.statut }}</UBadge>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
