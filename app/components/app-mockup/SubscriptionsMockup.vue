<script setup lang="ts">
const rows = [
  { occupant: 'Atelier Nomade', ressource: 'Bureau 12 — 18m²', contribution: '340 € / mois', statut: 'À jour', color: 'success' as const },
  { occupant: 'Collectif Lisière', ressource: 'Salle commune', contribution: '210 € / mois', statut: 'Avenant en cours', color: 'warning' as const },
  { occupant: 'La Filature Coop', ressource: 'Atelier bois', contribution: '480 € / mois', statut: 'À jour', color: 'success' as const },
  { occupant: 'Studio Kerne', ressource: 'Bureau 4 — 12m²', contribution: '260 € / mois', statut: 'En attente', color: 'neutral' as const }
]
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
          <p class="text-xs text-muted">Tiers-lieu La Grange — 4 occupants actifs</p>
        </div>
        <UButton size="xs" color="neutral" variant="subtle" icon="i-lucide-plus" class="shrink-0 whitespace-nowrap">
          Nouvelle souscription
        </UButton>
      </div>

      <div class="overflow-hidden rounded-lg border border-default">
        <table class="w-full text-left text-sm">
          <thead class="bg-elevated/50 text-xs text-muted">
            <tr>
              <th class="px-3 py-2 font-medium">Occupant</th>
              <th class="hidden px-3 py-2 font-medium sm:table-cell">Ressource</th>
              <th class="px-3 py-2 font-medium">Contribution</th>
              <th class="px-3 py-2 font-medium">Statut</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-default">
            <tr v-for="row in rows" :key="row.occupant">
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
