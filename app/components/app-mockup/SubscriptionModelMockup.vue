<script setup lang="ts">
type Rule = { label: string, value: string }
type SubscriptionData = { title: string, subtitle: string, rules: Rule[] }

const { t, tm, rt } = useI18n()
const scenario = useFeatureScenario()
const data = computed(() => resolveI18nMessages<SubscriptionData>(tm(`mockups.subscriptionModelMockup.${scenario.value}`), rt))
</script>

<template>
  <div class="w-full overflow-hidden rounded-xl border border-default bg-default shadow-2xl">
    <div class="flex items-center gap-1.5 border-b border-default bg-elevated/50 px-4 py-2.5">
      <span class="size-2.5 rounded-full bg-error/60" />
      <span class="size-2.5 rounded-full bg-warning/60" />
      <span class="size-2.5 rounded-full bg-success/60" />
      <span class="ml-3 text-xs text-dimmed">{{ t('mockups.subscriptionModelMockup.windowTitle') }}</span>
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
