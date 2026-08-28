<script setup lang="ts">
const DATA: Record<FeatureScenarioKey, { title: string, subtitle: string, rules: { label: string, value: string }[] }> = {
  'tiers-lieux': {
    title: 'Bureau partagé',
    subtitle: 'Appliqué à 12 souscriptions actives',
    rules: [
      { label: 'Récurrence', value: 'Mensuelle' },
      { label: 'Montant', value: 'Paramétré — 340 €' },
      { label: 'Facturation', value: 'Par facture' },
      { label: 'Adhésion', value: 'Contrat + avenant automatique' }
    ]
  },
  cooperatives: {
    title: 'Part sociale coopérateur',
    subtitle: 'Appliqué à 34 souscriptions actives',
    rules: [
      { label: 'Récurrence', value: 'Annuelle' },
      { label: 'Montant', value: 'Fixé — 50 €' },
      { label: 'Facturation', value: 'Par facture' },
      { label: 'Adhésion', value: 'Adhésion simple' }
    ]
  },
  ateliers: {
    title: 'Adhésion atelier',
    subtitle: 'Appliqué à 27 souscriptions actives',
    rules: [
      { label: 'Récurrence', value: 'Mensuelle' },
      { label: 'Montant', value: 'Paramétré — 25 €' },
      { label: 'Facturation', value: 'Par notification' },
      { label: 'Adhésion', value: 'Adhésion + avenant' }
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
      <span class="ml-3 text-xs text-dimmed">cascade.app — Modèles de souscription</span>
    </div>

    <div class="flex flex-col gap-4 p-4 sm:p-6">
      <div>
        <p class="text-sm font-medium text-highlighted">{{ data.title }}</p>
        <p class="text-xs text-muted">{{ data.subtitle }}</p>
      </div>

      <div class="flex flex-col gap-2">
        <div
          v-for="rule in data.rules"
          :key="rule.label"
          class="flex items-center justify-between gap-3 rounded-lg border border-default px-3 py-2.5"
        >
          <span class="text-sm text-muted">{{ rule.label }}</span>
          <span class="text-sm font-medium text-highlighted">{{ rule.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
