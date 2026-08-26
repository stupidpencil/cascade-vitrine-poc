<script setup lang="ts">
interface Lot {
  icon: string
  title: string
  description: string
  features: string[]
  automation: string
  mockup?: 'subscription-model' | 'subscriptions' | 'contributions' | 'invoices' | 'payments' | 'pilotage'
}

withDefaults(defineProps<{
  lots?: Lot[]
}>(), {
  lots: () => [
    {
      icon: 'i-lucide-layout-template',
      title: 'Modèles de souscription',
      description: 'Définir une fois les règles qui s’appliqueront à toutes les souscriptions qui en découlent.',
      features: [
        'Récurrence : ponctuelle ou récurrente (hebdomadaire, mensuelle, trimestrielle, annuelle)',
        'Montant fixé, paramétré ou flexible',
        'Facturation par facture ou par notification',
        'Contrat ou adhésion simple, avec modèle de contrat et d’avenant'
      ],
      automation: 'Un seul modèle, appliqué automatiquement à chaque nouvelle souscription — aucune règle à ressaisir.',
      mockup: 'subscription-model'
    },
    {
      icon: 'i-lucide-file-signature',
      title: 'Souscriptions',
      description: 'Centraliser les souscriptions de chaque contributeur, dérivées d’un modèle, et leurs conditions d’utilisation.',
      features: [
        'Souscription dérivée d’un modèle de souscription',
        'Avenants liés à la souscription d’origine',
        'Historique complet des versions',
        'Alertes avant échéance'
      ],
      automation: 'Nouvel avenant et nouvelle version générés automatiquement à chaque changement, sans ressaisie.',
      mockup: 'subscriptions'
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
      description: 'Générer les factures et avoirs qui découlent des souscriptions et contributions, et suivre leur statut.',
      features: [
        'Génération de factures depuis les contributions',
        'Avoirs et régularisations',
        'Statuts : émise, payée, en retard',
        'Export comptable'
      ],
      automation: 'Facturation émise et envoyée automatiquement à chaque échéance, sans intervention manuelle.',
      mockup: 'invoices'
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
      automation: 'Rapprochement automatique des paiements et relances programmées en cas de retard.',
      mockup: 'payments'
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
      <div v-for="lot in lots" :key="lot.title" class="grid gap-12 py-16 first:pt-0 last:pb-0 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <div class="mb-4 inline-flex items-center justify-center rounded-lg bg-elevated p-2.5">
            <UIcon :name="lot.icon" class="size-5 text-primary" />
          </div>
          <h3 class="text-2xl font-semibold text-highlighted">{{ lot.title }}</h3>
          <p class="mt-3 max-w-md text-muted">{{ lot.description }}</p>

          <ul class="mt-8 flex flex-col gap-3">
            <li v-for="feature in lot.features" :key="feature" class="flex items-start gap-2 text-sm text-toned">
              <UIcon name="i-lucide-check" class="mt-0.5 size-4 shrink-0 text-primary" />
              {{ feature }}
            </li>
          </ul>

          <div class="mt-8 flex items-start gap-2 rounded-lg bg-elevated/50 px-4 py-3.5 text-sm">
            <UIcon name="i-lucide-zap" class="mt-0.5 size-4 shrink-0 text-primary" />
            <span class="text-toned">{{ lot.automation }}</span>
          </div>
        </div>

        <div>
          <AppMockupSubscriptionModelMockup v-if="lot.mockup === 'subscription-model'" />
          <AppMockupSubscriptionsMockup v-else-if="lot.mockup === 'subscriptions'" />
          <AppMockupContributionsMockup v-else-if="lot.mockup === 'contributions'" />
          <AppMockupInvoicesMockup v-else-if="lot.mockup === 'invoices'" />
          <AppMockupPaymentsMockup v-else-if="lot.mockup === 'payments'" />
          <AppMockupPilotageMockup v-else-if="lot.mockup === 'pilotage'" />
        </div>
      </div>
    </div>
  </UPageSection>
</template>
