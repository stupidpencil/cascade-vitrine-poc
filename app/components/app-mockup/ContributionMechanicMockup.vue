<script setup lang="ts">
const { t, locale } = useI18n()

// Charges fixes à couvrir par la part de base (loyer, adhésion, travaux…),
// répartie automatiquement entre les contributeurs (1 / nombre de contributeurs).
const BASE_OBJECTIVE = 60
const MIN_CONTRIBUTORS = 5
const MAX_CONTRIBUTORS = 25

const contributors = ref(10)

const basePart = computed(() => BASE_OBJECTIVE / contributors.value)

// Ces parts dépendent d'un usage réel (abonnements, transactions, activité
// réseau, surcotisation volontaire) : elles ne varient pas avec le nombre
// de contributeurs, contrairement à la part de base.
// Amounts are computed data, not translatable text, so they stay here and
// get matched by index to the translated label/hint pairs fetched via t()
// from mockups.contributionMechanicMockup.variableParts.
const variablePartAmounts = [2, 0.7, 0.3]
const variableTotal = variablePartAmounts.reduce((sum, amount) => sum + amount, 0)

const total = computed(() => basePart.value + variableTotal)

// fr-FR/en-US number grouping differ (e.g. decimal comma vs point), and the
// € sign sits on the opposite side of the amount in English — so amounts are
// formatted per-locale rather than always as fr-FR.
const numberLocale = computed(() => (locale.value === 'en' ? 'en-US' : 'fr-FR'))
function formatEuro(n: number) {
  const formatted = n.toLocaleString(numberLocale.value, { maximumFractionDigits: 2 })
  return locale.value === 'en' ? `€${formatted}` : `${formatted} €`
}

const parts = computed(() => [
  {
    label: t('mockups.contributionMechanicMockup.basePart.label'),
    hint: t('mockups.contributionMechanicMockup.basePart.hint'),
    amount: formatEuro(basePart.value)
  },
  ...variablePartAmounts.map((amount, i) => ({
    label: t(`mockups.contributionMechanicMockup.variableParts[${i}].label`),
    hint: t(`mockups.contributionMechanicMockup.variableParts[${i}].hint`),
    amount: formatEuro(amount)
  }))
])
</script>

<template>
  <div class="w-full overflow-hidden rounded-xl border border-default bg-default shadow-2xl">
    <div class="flex items-center gap-1.5 border-b border-default bg-elevated/50 px-4 py-2.5">
      <span class="size-2.5 rounded-full bg-error/60" />
      <span class="size-2.5 rounded-full bg-warning/60" />
      <span class="size-2.5 rounded-full bg-success/60" />
      <span class="ml-3 text-xs text-dimmed">{{ t('mockups.contributionMechanicMockup.windowCaption') }}</span>
    </div>

    <div class="flex flex-col gap-5 p-4 sm:p-6">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-highlighted">{{ t('mockups.contributionMechanicMockup.cycleObjective') }}</p>
          <p class="text-2xl font-semibold text-highlighted">{{ formatEuro(BASE_OBJECTIVE) }}</p>
        </div>
        <div class="text-right">
          <p class="text-sm font-medium text-highlighted">{{ t('mockups.contributionMechanicMockup.contributionPerPerson') }}</p>
          <p class="text-2xl font-semibold text-highlighted">
            {{ formatEuro(total) }}
          </p>
        </div>
      </div>

      <div class="rounded-lg border border-default p-4">
        <div class="mb-3 flex items-center justify-between">
          <p class="text-sm text-muted">{{ t('mockups.contributionMechanicMockup.activeContributors') }}</p>
          <div class="flex items-center gap-2">
            <span class="text-lg font-semibold text-highlighted">{{ contributors }}</span>
            <UBadge color="primary" variant="subtle" size="sm">
              {{ t('mockups.contributionMechanicMockup.autoAdjusted') }}
            </UBadge>
          </div>
        </div>
        <USlider
          v-model="contributors"
          :min="MIN_CONTRIBUTORS"
          :max="MAX_CONTRIBUTORS"
          :step="1"
        />
        <div class="mt-1 flex justify-between text-xs text-dimmed">
          <span>{{ MIN_CONTRIBUTORS }}</span>
          <span>{{ MAX_CONTRIBUTORS }}</span>
        </div>
        <p class="mt-3 text-xs text-dimmed">
          {{ t('mockups.contributionMechanicMockup.variationNote') }}
        </p>
      </div>

      <div>
        <p class="mb-2 text-xs font-medium text-muted">{{ t('mockups.contributionMechanicMockup.compositionTitle') }}</p>
        <div class="flex flex-col gap-2">
          <div
            v-for="part in parts"
            :key="part.label"
            class="flex items-center justify-between gap-3 rounded-lg border border-default px-3 py-2"
          >
            <div class="min-w-0">
              <p class="truncate text-sm font-medium text-highlighted">{{ part.label }}</p>
              <p class="truncate text-xs text-muted">{{ part.hint }}</p>
            </div>
            <p class="shrink-0 text-sm font-medium text-highlighted">{{ part.amount }}</p>
          </div>
          <div class="flex items-center justify-between gap-3 rounded-lg bg-elevated/50 px-3 py-2">
            <p class="text-sm font-semibold text-highlighted">{{ t('mockups.contributionMechanicMockup.total') }}</p>
            <p class="text-sm font-semibold text-highlighted">{{ formatEuro(total) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
