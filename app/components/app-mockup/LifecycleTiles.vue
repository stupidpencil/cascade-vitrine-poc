<script setup lang="ts">
const { t, tm, rt } = useI18n()

const tiles = computed(() => [
  { label: 'Ressource', badge: t('mockups.lifecycleTiles.resource.badge'), icon: 'i-lucide-box', offset: '' },
  { label: 'Modèle', badge: t('mockups.lifecycleTiles.model.badge'), icon: 'i-lucide-layout-template', offset: 'sm:mt-6' },
  { label: 'Contribution', badge: t('mockups.lifecycleTiles.contribution.badge'), icon: 'i-lucide-hand-coins', offset: 'sm:-mt-2' },
  { label: 'Facture', badge: t('mockups.lifecycleTiles.invoice.badge'), icon: 'i-lucide-receipt-text', offset: 'sm:mt-4' }
])

const modelBadges = computed(() => resolveI18nMessages<string[]>(tm('mockups.lifecycleTiles.model.badges'), rt))
</script>

<template>
  <div class="grid grid-cols-2 gap-4 sm:gap-5">
    <div v-for="tile in tiles" :key="tile.label" class="relative" :class="tile.offset">
      <UBadge color="neutral" variant="solid" size="sm" :icon="tile.icon" class="absolute -top-3 left-3 z-10 shadow-sm">
        {{ tile.badge }}
      </UBadge>

      <div class="flex h-full flex-col rounded-xl border border-default bg-default p-4 pt-6 shadow-lg">
        <template v-if="tile.label === 'Ressource'">
          <p class="text-sm font-medium text-highlighted">{{ t('mockups.lifecycleTiles.resource.title') }}</p>
          <p class="mt-1 text-xs text-muted">{{ t('mockups.lifecycleTiles.resource.subtitle') }}</p>
          <UBadge color="primary" variant="subtle" size="sm" class="mt-3 w-fit">{{ t('mockups.lifecycleTiles.resource.occupancyBadge') }}</UBadge>
        </template>

        <template v-else-if="tile.label === 'Modèle'">
          <p class="text-sm font-medium text-highlighted">{{ t('mockups.lifecycleTiles.model.title') }}</p>
          <div class="mt-3 flex flex-wrap gap-1.5">
            <UBadge v-for="badge in modelBadges" :key="badge" color="neutral" variant="subtle" size="sm">{{ badge }}</UBadge>
          </div>
        </template>

        <template v-else-if="tile.label === 'Contribution'">
          <p class="text-sm font-medium text-highlighted">{{ t('mockups.lifecycleTiles.contribution.title') }}</p>
          <div class="mt-1 flex flex-wrap gap-1.5">
            <UBadge color="neutral" variant="subtle" size="sm">{{ t('mockups.lifecycleTiles.contribution.adaptiveBadge') }}</UBadge>
            <UBadge color="warning" variant="subtle" size="sm">{{ t('mockups.lifecycleTiles.contribution.comingSoonBadge') }}</UBadge>
          </div>
          <p class="mt-3 text-2xl font-semibold text-highlighted">38 — 62 €</p>
          <p class="mt-1 text-xs text-muted">{{ t('mockups.lifecycleTiles.contribution.amountNote') }}</p>
        </template>

        <template v-else-if="tile.label === 'Facture'">
          <p class="truncate text-sm font-medium text-highlighted">#2024-116</p>
          <p class="mt-1 text-xs text-muted">{{ t('mockups.lifecycleTiles.invoice.amount') }}</p>
          <UBadge color="neutral" variant="subtle" size="sm" class="mt-3 w-fit">{{ t('mockups.lifecycleTiles.invoice.statusBadge') }}</UBadge>
        </template>
      </div>
    </div>
  </div>
</template>
