<script setup lang="ts">
interface Symptom {
  icon: string
  title: string
  description: string
}

withDefaults(defineProps<{
  title?: string
  description?: string
  symptoms?: Symptom[]
}>(), {
  title: 'Les organisations collectives méritent mieux qu’un tableur et un logiciel de facturation.',
  description: 'Aujourd’hui, la plupart des lieux et collectifs bricolent leur gestion avec des outils qui n’ont pas été pensés pour la mutualisation.',
  symptoms: () => [
    { icon: 'i-lucide-files', title: 'Contrats dispersés', description: 'Dans des dossiers et des boîtes mail, difficiles à retrouver.' },
    { icon: 'i-lucide-notebook-pen', title: 'Suivi manuel', description: 'Les contributions de chaque occupant suivies à la main.' },
    { icon: 'i-lucide-file-diff', title: 'Avenants multiples', description: 'Difficiles à recouper avec le contrat d’origine.' },
    { icon: 'i-lucide-receipt', title: 'Facturation déconnectée', description: 'Sans lien direct avec les contrats réels.' },
    { icon: 'i-lucide-users', title: 'Information cloisonnée', description: 'Difficile à partager entre les membres du collectif.' },
    { icon: 'i-lucide-table', title: 'Règles dans un tableur', description: 'Les règles collectives vivent dans un fichier à part.' }
  ]
})
</script>

<template>
  <UPageSection :title="title" :description="description">
    <UPageGrid class="sm:grid-cols-2 lg:grid-cols-3">
      <UPageCard
        v-for="symptom in symptoms"
        :key="symptom.title"
        :icon="symptom.icon"
        :title="symptom.title"
        :description="symptom.description"
        spotlight
      />
    </UPageGrid>
  </UPageSection>
</template>
