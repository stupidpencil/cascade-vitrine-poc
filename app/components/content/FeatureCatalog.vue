<script setup lang="ts">
interface Lot {
  icon: string
  title: string
  description: string
  features: string[]
  automation: string
  mockup?: 'resources' | 'subscription-model' | 'subscriptions' | 'contributions' | 'invoices' | 'payments' | 'pilotage'
}

withDefaults(defineProps<{
  lots?: Lot[]
}>(), {
  lots: () => []
})

</script>

<template>
  <FeatureScenarioSwitcher />

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
          <AppMockupResourcesMockup v-if="lot.mockup === 'resources'" />
          <AppMockupSubscriptionModelMockup v-else-if="lot.mockup === 'subscription-model'" />
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
