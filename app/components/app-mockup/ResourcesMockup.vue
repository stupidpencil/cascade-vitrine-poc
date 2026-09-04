<script setup lang="ts">
const { t, tm, rt } = useI18n()
const scenario = useFeatureScenario()
const data = computed(() => resolveI18nMessages<{ subtitle: string, rows: { name: string, unit: string, qty: string, price: string, occupation: string }[] }>(tm(`mockups.resourcesMockup.${scenario.value}`), rt))
</script>

<template>
  <div class="w-full overflow-hidden rounded-xl border border-default bg-default shadow-2xl">
    <div class="flex items-center gap-1.5 border-b border-default bg-elevated/50 px-4 py-2.5">
      <span class="size-2.5 rounded-full bg-error/60" />
      <span class="size-2.5 rounded-full bg-warning/60" />
      <span class="size-2.5 rounded-full bg-success/60" />
      <span class="ml-3 text-xs text-dimmed">cascade.coop — {{ t('mockups.resourcesMockup.windowTitle') }}</span>
    </div>

    <div class="flex flex-col gap-4 p-4 sm:p-6">
      <div>
        <p class="text-sm font-medium text-highlighted">{{ t('mockups.resourcesMockup.title') }}</p>
        <p class="text-xs text-muted">{{ data.subtitle }}</p>
      </div>

      <div class="overflow-hidden rounded-lg border border-default">
        <table class="w-full text-left text-sm">
          <thead class="bg-elevated/50 text-xs text-muted">
            <tr>
              <th class="px-3 py-2 font-medium">{{ t('mockups.resourcesMockup.columnResource') }}</th>
              <th class="hidden px-3 py-2 font-medium sm:table-cell">{{ t('mockups.resourcesMockup.columnQuantity') }}</th>
              <th class="px-3 py-2 font-medium">{{ t('mockups.resourcesMockup.columnPrice') }}</th>
              <th class="px-3 py-2 font-medium">{{ t('mockups.resourcesMockup.columnOccupation') }}</th>
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
