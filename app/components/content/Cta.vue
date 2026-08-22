<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: 'Vous gérez un lieu ou des ressources collectivement ?',
  description: 'Découvrez si Cascade peut répondre à vos besoins.'
})
</script>

<template>
  <UPageCTA
    :title="title"
    :description="description"
    :links="[
      { label: 'Tester Cascade', to: '/produit', trailingIcon: 'i-lucide-arrow-right', size: 'lg' },
      { label: 'Nous contacter', to: '/a-propos', color: 'neutral', variant: 'subtle', size: 'lg' }
    ]"
  />
</template>
