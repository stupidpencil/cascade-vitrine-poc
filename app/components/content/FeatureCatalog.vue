<script setup lang="ts">
interface Lot {
  icon: string
  title: string
  description: string
  features: string[]
  automation: string
  mockup?: 'contracts' | 'contributions' | 'pilotage'
}

withDefaults(defineProps<{
  lots?: Lot[]
}>(), {
  lots: () => [
    {
      icon: 'i-lucide-file-signature',
      title: 'Contrats',
      description: 'Centraliser les contrats, les ressources qu’ils couvrent et leurs conditions d’utilisation.',
      features: [
        'Modèles de contrats réutilisables',
        'Avenants liés au contrat d’origine',
        'Historique complet des versions',
        'Alertes avant échéance'
      ],
      automation: 'Renouvellement tacite et génération des avenants à échéance, sans ressaisie.',
      mockup: 'contracts'
    },
    {
      icon: 'i-lucide-hand-coins',
      title: 'Contributions',
      description: 'Définir des contributions ponctuelles ou récurrentes, fixes ou adaptatives, par ressource ou par occupant.',
      features: [
        'Grille de contribution par ressource',
        'Contribution adaptative selon des règles collectives',
        'Historique des ajustements'
      ],
      automation: 'Recalcul automatique de chaque contribution selon la formule adaptative choisie par le collectif.',
      mockup: 'contributions'
    },
    {
      icon: 'i-lucide-receipt-text',
      title: 'Facturation',
      description: 'Générer les factures et avoirs qui découlent des contrats et contributions, et suivre leur statut.',
      features: [
        'Génération de factures depuis les contributions',
        'Avoirs et régularisations',
        'Statuts : émise, payée, en retard',
        'Export comptable'
      ],
      automation: 'Facturation émise et envoyée automatiquement à chaque échéance, sans intervention manuelle.'
    },
    {
      icon: 'i-lucide-credit-card',
      title: 'Paiements',
      description: 'Suivre les paiements reçus, quel que soit le moyen, et les rattacher aux factures correspondantes.',
      features: [
        'Suivi par moyen de paiement (prélèvement, virement, carte…)',
        'Rapprochement facture / paiement',
        'Relances en cas d’impayé'
      ],
      automation: 'Rapprochement automatique des paiements et relances programmées en cas de retard.'
    },
    {
      icon: 'i-lucide-line-chart',
      title: 'Pilotage',
      description: 'Comprendre en un coup d’œil les ressources, les contributions et les flux du collectif.',
      features: [
        'Tableaux de bord par ressource ou occupant',
        'Vue d’ensemble des contributions et paiements',
        'Export des données'
      ],
      automation: 'Alertes automatiques sur les seuils définis et rapports périodiques envoyés au collectif.',
      mockup: 'pilotage'
    }
  ]
})
</script>

<template>
  <UPageSection>
    <div class="divide-y divide-default">
      <div v-for="lot in lots" :key="lot.title" class="grid gap-10 py-12 first:pt-0 last:pb-0 lg:grid-cols-2 lg:items-center">
        <div>
          <div class="mb-3 inline-flex items-center justify-center rounded-lg bg-elevated p-2.5">
            <UIcon :name="lot.icon" class="size-5 text-primary" />
          </div>
          <h3 class="text-2xl font-semibold text-highlighted">{{ lot.title }}</h3>
          <p class="mt-2 max-w-md text-muted">{{ lot.description }}</p>

          <ul class="mt-6 flex flex-col gap-2">
            <li v-for="feature in lot.features" :key="feature" class="flex items-start gap-2 text-sm text-toned">
              <UIcon name="i-lucide-check" class="mt-0.5 size-4 shrink-0 text-primary" />
              {{ feature }}
            </li>
          </ul>

          <div class="mt-6 flex items-start gap-2 rounded-lg bg-elevated/50 px-4 py-3 text-sm">
            <UIcon name="i-lucide-zap" class="mt-0.5 size-4 shrink-0 text-primary" />
            <span class="text-toned">{{ lot.automation }}</span>
          </div>
        </div>

        <div>
          <AppMockupContractsMockup v-if="lot.mockup === 'contracts'" />
          <AppMockupContributionsMockup v-else-if="lot.mockup === 'contributions'" />
          <AppMockupPilotageMockup v-else-if="lot.mockup === 'pilotage'" />
        </div>
      </div>
    </div>
  </UPageSection>
</template>
