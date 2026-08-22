<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: 'Construire l’infrastructure numérique des communs.',
  description: 'Cascade ne cherche pas seulement à optimiser la gestion administrative. L’ambition est de donner aux organisations collectives les outils pour mutualiser des ressources, définir leurs propres règles économiques, partager l’information, organiser les contributions et coopérer entre structures.'
})
</script>

<template>
  <UPageSection class="bg-inverted">
    <div class="mx-auto max-w-3xl text-center">
      <h2 class="text-3xl font-semibold tracking-tight text-inverted sm:text-4xl">
        {{ title }}
      </h2>
      <p class="mt-6 text-lg text-inverted" style="opacity: 0.7">
        {{ description }}
      </p>
    </div>
  </UPageSection>
</template>
