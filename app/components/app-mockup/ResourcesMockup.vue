<script setup lang="ts">
const rows = [
  { name: 'Bureaux privatifs', unit: 'Bureau', qty: '8', price: '340 € / mois', occupation: '92 %' },
  { name: 'Places de parking', unit: 'Place', qty: '15', price: '45 € / mois', occupation: '73 %' },
  { name: 'Casiers de stockage', unit: 'Casier', qty: '22', price: '12 € / mois', occupation: '86 %' }
]
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
        <p class="text-xs text-muted">Bâtiment « Les petits voisins » — 3 types actifs</p>
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
            <tr v-for="row in rows" :key="row.name">
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
