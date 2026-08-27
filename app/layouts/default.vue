<script setup lang="ts">
const links = [
  { label: 'Pour qui ?', to: '/pour-qui' },
  { label: 'Cascade', to: '/cascade' },
  { label: 'Fonctionnalités', to: '/fonctionnalites' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Documentation', to: 'https://github.com/cascade-coop', target: '_blank' }
]
</script>

<template>
  <div>
    <UHeader to="/">
      <template #title>
        <span class="font-semibold text-highlighted">Cascade</span>
      </template>

      <UNavigationMenu :items="links" variant="link" />

      <template #right>
        <UColorModeButton />
        <UButton to="/cascade" color="neutral" variant="ghost" class="hidden sm:flex">
          Se connecter
        </UButton>
        <UButton to="/cascade" trailing-icon="i-lucide-arrow-right">
          Tester Cascade
        </UButton>
      </template>

      <template #body>
        <UNavigationMenu :items="links" orientation="vertical" class="-mx-2.5" />
        <UColorModeButton class="mt-4" />
      </template>
    </UHeader>

    <UMain>
      <slot />
    </UMain>

    <USeparator />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          © {{ new Date().getFullYear() }} Cascade — sous licence Coopyleft.
        </p>
      </template>

      <template #right>
        <UButton
          icon="i-simple-icons-github"
          to="https://github.com/cascade-coop"
          target="_blank"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </div>
</template>
