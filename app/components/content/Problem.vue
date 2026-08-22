<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: 'Les organisations collectives méritent mieux qu’un tableur et un logiciel de facturation.',
  description: 'Aujourd’hui, la plupart des lieux et collectifs bricolent leur gestion avec des outils qui n’ont pas été pensés pour la mutualisation.'
})

const symptoms = [
  { icon: 'i-lucide-files', label: 'Contrats dispersés dans des dossiers et boîtes mail' },
  { icon: 'i-lucide-notebook-pen', label: 'Suivi manuel des contributions de chaque occupant' },
  { icon: 'i-lucide-file-diff', label: 'Avenants multiples difficiles à recouper' },
  { icon: 'i-lucide-receipt', label: 'Facturation déconnectée des contrats réels' },
  { icon: 'i-lucide-users', label: 'Information difficile à partager entre membres' },
  { icon: 'i-lucide-table', label: 'Règles collectives gérées dans un tableur' }
]
</script>

<template>
  <UPageSection :title="title" :description="description" orientation="horizontal">
    <UPageGrid class="sm:grid-cols-2">
      <div
        v-for="symptom in symptoms"
        :key="symptom.label"
        class="flex items-center gap-3 rounded-lg border border-default p-4"
      >
        <UIcon :name="symptom.icon" class="size-5 shrink-0 text-muted" />
        <p class="text-sm text-toned">{{ symptom.label }}</p>
      </div>
    </UPageGrid>
  </UPageSection>
</template>
