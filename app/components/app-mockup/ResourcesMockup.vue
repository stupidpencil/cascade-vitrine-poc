<script setup lang="ts">
const DATA: Record<FeatureScenarioKey, { subtitle: string, rows: { name: string, unit: string, qty: string, price: string, occupation: string }[] }> = {
  'tiers-lieux': {
    subtitle: 'Bâtiment « Les petits voisins » — 3 types actifs',
    rows: [
      { name: 'Bureaux privatifs', unit: 'Bureau', qty: '8', price: '340 € / mois', occupation: '92 %' },
      { name: 'Places de parking', unit: 'Place', qty: '15', price: '45 € / mois', occupation: '73 %' },
      { name: 'Casiers de stockage', unit: 'Casier', qty: '22', price: '12 € / mois', occupation: '86 %' }
    ]
  },
  cooperatives: {
    subtitle: 'Coopérative Lieux Vivants — 3 types actifs',
    rows: [
      { name: 'Ateliers de production', unit: 'Atelier', qty: '6', price: '210 € / mois', occupation: '88 %' },
      { name: 'Salles de réunion', unit: 'Salle', qty: '3', price: '25 € / demi-jour', occupation: '64 %' },
      { name: 'Matériel partagé', unit: 'Kit', qty: '12', price: '8 € / session', occupation: '77 %' }
    ]
  },
  ateliers: {
    subtitle: 'Atelier Les Mains Vertes — 3 types actifs',
    rows: [
      { name: 'Établis', unit: 'Établi', qty: '10', price: '18 € / mois', occupation: '90 %' },
      { name: 'Machines à bois', unit: 'Machine', qty: '4', price: '6 € / heure', occupation: '68 %' },
      { name: 'Casiers à outils', unit: 'Casier', qty: '20', price: '5 € / mois', occupation: '81 %' }
    ]
  },
  amap: {
    subtitle: 'AMAP des Trois Sillons — 3 types actifs',
    rows: [
      { name: 'Parts de paniers légumes', unit: 'Part', qty: '45', price: '18 € / semaine', occupation: '96 %' },
      { name: 'Parts de paniers œufs', unit: 'Part', qty: '20', price: '6 € / semaine', occupation: '70 %' },
      { name: 'Casiers de retrait', unit: 'Casier', qty: '50', price: 'Inclus', occupation: '88 %' }
    ]
  },
  creche: {
    subtitle: 'Crèche « Les petits fripons » — 3 types actifs',
    rows: [
      { name: 'Places d’accueil', unit: 'Place', qty: '16', price: '480 € / mois', occupation: '94 %' },
      { name: 'Créneaux de garde partagée', unit: 'Créneau', qty: '12', price: '15 € / demi-jour', occupation: '77 %' },
      { name: 'Matériel de puériculture', unit: 'Kit', qty: '8', price: '5 € / mois', occupation: '62 %' }
    ]
  },
  fanfare: {
    subtitle: 'Fanfare du Faubourg — 3 types actifs',
    rows: [
      { name: 'Local de répétition', unit: 'Créneau', qty: '6', price: '20 € / soirée', occupation: '83 %' },
      { name: 'Instruments du parc commun', unit: 'Instrument', qty: '14', price: '8 € / mois', occupation: '71 %' },
      { name: 'Casiers de rangement', unit: 'Casier', qty: '18', price: '4 € / mois', occupation: '89 %' }
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
      <span class="ml-3 text-xs text-dimmed">cascade.app — Ressources</span>
    </div>

    <div class="flex flex-col gap-4 p-4 sm:p-6">
      <div>
        <p class="text-sm font-medium text-highlighted">Ressources</p>
        <p class="text-xs text-muted">{{ data.subtitle }}</p>
      </div>

      <div class="overflow-hidden rounded-lg border border-default">
        <table class="w-full text-left text-sm">
          <thead class="bg-elevated/50 text-xs text-muted">
            <tr>
              <th class="px-3 py-2 font-medium">Ressource</th>
              <th class="hidden px-3 py-2 font-medium sm:table-cell">Quantité</th>
              <th class="px-3 py-2 font-medium">Prix unitaire</th>
              <th class="px-3 py-2 font-medium">Occupation</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-default">
            <tr v-for="row in data.rows" :key="row.name">
              <td class="px-3 py-2.5 font-medium text-highlighted">{{ row.name }}</td>
              <td class="hidden px-3 py-2.5 text-muted sm:table-cell">{{ row.qty }} × {{ row.unit }}</td>
              <td class="px-3 py-2.5 text-muted">{{ row.price }}</td>
              <td class="px-3 py-2.5">
                <UBadge color="primary" variant="subtle" size="sm">{{ row.occupation }}</UBadge>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
