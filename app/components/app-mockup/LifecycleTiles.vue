<script setup lang="ts">
const tiles = [
  { label: 'Modèle', icon: 'i-lucide-layout-template', offset: '' },
  { label: 'Souscription', icon: 'i-lucide-file-signature', offset: 'sm:mt-6' },
  { label: 'Contribution', icon: 'i-lucide-hand-coins', offset: 'sm:-mt-2' },
  { label: 'Facture', icon: 'i-lucide-receipt-text', offset: 'sm:mt-4' }
]
</script>

<template>
  <div class="grid grid-cols-2 gap-4 sm:gap-5">
    <div v-for="tile in tiles" :key="tile.label" class="relative" :class="tile.offset">
      <UBadge color="neutral" variant="solid" size="sm" :icon="tile.icon" class="absolute -top-3 left-3 z-10 shadow-sm">
        {{ tile.label }}
      </UBadge>

      <div class="flex h-full flex-col rounded-xl border border-default bg-default p-4 pt-6 shadow-lg">
        <template v-if="tile.label === 'Modèle'">
          <p class="text-sm font-medium text-highlighted">Loyer mensuel</p>
          <div class="mt-3 flex flex-wrap gap-1.5">
            <UBadge color="neutral" variant="subtle" size="sm">Récurrent</UBadge>
            <UBadge color="neutral" variant="subtle" size="sm">Facture</UBadge>
            <UBadge color="neutral" variant="subtle" size="sm">Contrat</UBadge>
          </div>
        </template>

        <template v-else-if="tile.label === 'Souscription'">
          <p class="text-sm font-medium text-highlighted">Lambda SARL</p>
          <p class="mt-1 text-xs text-muted">150 € / mois</p>
          <UBadge color="success" variant="subtle" size="sm" class="mt-3 w-fit">Actif</UBadge>
        </template>

        <template v-else-if="tile.label === 'Contribution'">
          <p class="text-2xl font-semibold text-highlighted">96 %</p>
          <p class="mt-1 text-xs text-muted">Taux de recouvrement</p>
          <div class="mt-3 flex items-end gap-1">
            <div v-for="(h, i) in [10, 14, 12, 18, 20, 24]" :key="i" class="flex-1 rounded-t bg-primary" :style="{ height: `${h}px`, opacity: 0.75 }" />
          </div>
        </template>

        <template v-else-if="tile.label === 'Facture'">
          <p class="truncate text-sm font-medium text-highlighted">#BAT1-F-2600001</p>
          <p class="mt-1 text-xs text-muted">25,44 € TTC</p>
          <UBadge color="neutral" variant="subtle" size="sm" class="mt-3 w-fit">Facturée</UBadge>
        </template>
      </div>
    </div>
  </div>
</template>
