<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: 'Vous gérez un lieu ou des ressources collectivement ?',
  description: 'Découvrez si Cascade peut répondre à vos besoins.'
})

const { open: openContactModal } = useContactModal()
</script>

<template>
  <UPageCTA :title="title" :description="description" :ui="{ root: 'rounded-none' }">
    <template #links>
      <UButton to="/fonctionnalites" trailing-icon="i-lucide-arrow-right" size="lg">
        Tester Cascade
      </UButton>
      <UButton color="neutral" variant="subtle" size="lg" @click="openContactModal">
        Nous contacter
      </UButton>
    </template>
  </UPageCTA>
</template>
