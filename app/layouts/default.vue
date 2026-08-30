<script setup lang="ts">
const links = [
  { label: 'Pour qui ?', to: '/pour-qui' },
  { label: 'Fonctionnalités', to: '/fonctionnalites' },
  { label: 'Contribution adaptative', to: '/contribution-adaptative' },
  { label: 'La fédération', to: '/la-federation' },
  { label: 'Documentation', to: 'https://github.com/cascade-coop', target: '_blank' }
]
</script>

<template>
  <div>
    <UHeader to="/">
      <template #title>
        <AppLogo />
      </template>

      <UNavigationMenu :items="links" variant="link" />

      <template #right>
        <UColorModeButton />
        <UButton to="/fonctionnalites" color="neutral" variant="ghost" class="hidden whitespace-nowrap sm:flex">
          Se connecter
        </UButton>
        <UButton to="/fonctionnalites" trailing-icon="i-lucide-arrow-right" class="whitespace-nowrap">
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
