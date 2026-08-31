---
title: Toutes les fonctionnalités — Cascade
description: Le détail des lots fonctionnels de Cascade — contrats, contributions, facturation, paiements et pilotage — et ce qui s'automatise progressivement.
---

::page-header
---
title: Toutes les fonctionnalités
description: Le détail des lots fonctionnels de Cascade — ce qui existe aujourd'hui, et ce qui s'automatise progressivement.
---
::

::feature-catalog
---
lots:
  - icon: i-lucide-box
    title: Ressources
    description: Modéliser les actifs mutualisés — espaces, équipements, créneaux — et suivre leur occupation en temps réel.
    mockup: resources
    features:
      - Ressource découpée en sous-unités identifiables (places, casiers, postes…)
      - Attribution d'une ou plusieurs sous-unités à une souscription
      - Montant calculé automatiquement à partir du panier de ressources
      - Suivi de l'occupation et de la vacance en temps réel
    automation: Le montant de la souscription se recalcule automatiquement à chaque ressource ajoutée ou retirée du panier.
  - icon: i-lucide-layout-template
    title: Modèles de souscription
    description: Définir une fois les règles qui s'appliqueront à toutes les souscriptions qui en découlent.
    mockup: subscription-model
    features:
      - 'Récurrence : ponctuelle ou récurrente (hebdomadaire, mensuelle, trimestrielle, annuelle)'
      - Montant fixé, paramétré ou flexible
      - Facturation par facture ou par notification
      - Contrat ou adhésion simple, avec modèle de contrat et d'avenant
    automation: Un seul modèle, appliqué automatiquement à chaque nouvelle souscription — aucune règle à ressaisir.
  - icon: i-lucide-file-signature
    title: Souscriptions
    description: Centraliser les souscriptions de chaque contributeur, dérivées d'un modèle, et leurs conditions d'utilisation.
    mockup: subscriptions
    features:
      - Souscription dérivée d'un modèle de souscription
      - Signature électronique et pièces justificatives collectées à la création
      - Avenants liés à la souscription d'origine
      - Historique complet des versions
      - Alertes avant échéance
    automation: Nouvel avenant et nouvelle version générés automatiquement à chaque changement, sans ressaisie — avec import en masse pour intégrer de gros volumes de souscripteurs d'un coup.
  - icon: i-lucide-hand-coins
    title: Contributions
    description: Définir des contributions ponctuelles ou récurrentes, fixes ou adaptatives, par ressource ou par occupant.
    mockup: contributions
    features:
      - Grille de contribution par ressource
      - Contribution adaptative selon des règles collectives
      - Historique des ajustements
    automation: Recalcul automatique de chaque contribution selon la formule adaptative choisie par le collectif.
  - icon: i-lucide-receipt-text
    title: Facturation
    description: Générer les factures et avoirs qui découlent des souscriptions et contributions, et suivre leur statut.
    mockup: invoices
    features:
      - Génération de factures depuis les contributions
      - Avoirs et régularisations
      - 'Statuts : émise, payée, en retard'
      - Export comptable
    automation: Facturation émise et envoyée automatiquement à chaque échéance, sans intervention manuelle.
  - icon: i-lucide-credit-card
    title: Paiements
    description: Suivre les paiements reçus, quel que soit le moyen, et les rattacher aux factures correspondantes.
    mockup: payments
    features:
      - 'Suivi par moyen de paiement (prélèvement, virement, carte…)'
      - Rapprochement facture / paiement
      - Relances en cas d'impayé
    automation: Rapprochement automatique des paiements et relances programmées en cas de retard.
  - icon: i-lucide-line-chart
    title: Pilotage
    description: Comprendre en un coup d'œil les ressources, les contributions et les flux du collectif.
    mockup: pilotage
    features:
      - Tableaux de bord par ressource ou occupant
      - Vue d'ensemble des contributions et paiements
      - Export des données
    automation: Alertes automatiques sur les seuils définis et rapports périodiques envoyés au collectif.
---
::

::cta
---
title: Vous gérez un lieu ou des ressources collectivement ?
description: Découvrez si Cascade peut répondre à vos besoins.
primaryCtaLabel: Tester Cascade
primaryCtaTo: /fonctionnalites
secondaryCtaLabel: Nous contacter
---
::
