<script setup lang="ts">
interface Contributor {
  name: string
  color: string
  amount: number
}

const props = withDefaults(defineProps<{
  contributors?: Contributor[]
  initialObjective?: number
  minRatio?: number
  conventionalLabel?: string
  cascadeLabel?: string
  hint?: string
}>(), {
  contributors: () => [
    { name: 'Lucas', color: '#22d3ee', amount: 25 },
    { name: 'Marie', color: '#3b82f6', amount: 62 },
    { name: 'Sophie', color: '#ef4444', amount: 58 },
    { name: 'Thomas', color: '#22c55e', amount: 27 },
    { name: 'Léa', color: '#f97316', amount: 60 },
    { name: 'Chloé', color: '#a855f7', amount: 39 }
  ],
  initialObjective: 145,
  minRatio: 0.25,
  conventionalLabel: 'Système conventionnel',
  cascadeLabel: 'Système Cascade',
  hint: 'Vous pouvez ajuster la ligne d’objectif en la faisant glisser'
})

const total = computed(() => props.contributors.reduce((sum, c) => sum + c.amount, 0))
const minObjective = computed(() => Math.round(total.value * props.minRatio))

const objective = ref(props.initialObjective)
const ratio = computed(() => objective.value / total.value)
const saved = computed(() => total.value - objective.value)

const containerHeight = 320
const lineTop = computed(() => containerHeight * (1 - ratio.value))

const containerRef = ref<HTMLElement | null>(null)
const dragging = ref(false)

function valueFromClientY(clientY: number) {
  const rect = containerRef.value?.getBoundingClientRect()
  if (!rect) return objective.value
  const fromBottom = rect.bottom - clientY
  const clamped = Math.min(Math.max(fromBottom, 0), containerHeight)
  return Math.round((clamped / containerHeight) * total.value / 5) * 5
}

function onPointerMove(event: PointerEvent) {
  if (!dragging.value) return
  const value = valueFromClientY(event.clientY)
  objective.value = Math.min(Math.max(value, minObjective.value), total.value)
}

function onPointerUp() {
  dragging.value = false
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerup', onPointerUp)
}

function onPointerDown(event: PointerEvent) {
  dragging.value = true
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)
  event.preventDefault()
}
</script>

<template>
  <div class="w-full rounded-xl border border-default bg-default p-4 sm:p-8">
    <div ref="containerRef" class="relative mx-auto" :style="{ height: `${containerHeight}px`, maxWidth: '480px' }">
      <div class="absolute inset-0 flex items-end justify-center gap-16 sm:gap-24">
        <div class="flex flex-col items-center gap-3">
          <p class="text-xs font-medium text-muted sm:text-sm">{{ conventionalLabel }}</p>
          <div class="relative w-16 overflow-hidden rounded-t-lg sm:w-20" :style="{ height: `${containerHeight}px` }">
            <div class="absolute inset-0 flex flex-col-reverse">
              <div
                v-for="c in contributors"
                :key="c.name"
                :style="{ height: `${(c.amount / total) * 100}%`, backgroundColor: c.color }"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-col items-center gap-3">
          <p class="text-xs font-medium text-muted sm:text-sm">{{ cascadeLabel }}</p>
          <div class="relative w-16 overflow-hidden rounded-t-lg bg-elevated sm:w-20" :style="{ height: `${containerHeight}px` }">
            <div class="absolute bottom-0 inset-x-0 flex flex-col-reverse" :style="{ height: `${ratio * 100}%` }">
              <div
                v-for="c in contributors"
                :key="c.name"
                :style="{ height: `${(c.amount / total) * 100}%`, backgroundColor: c.color }"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        class="absolute left-0 right-0 flex touch-none items-center gap-2 select-none"
        :class="dragging ? 'cursor-grabbing' : 'cursor-grab'"
        :style="{ top: `${lineTop}px` }"
        @pointerdown="onPointerDown"
      >
        <div class="h-0.5 flex-1 border-t-2 border-dashed border-primary" />
        <UBadge color="primary" variant="solid" size="sm" class="shrink-0 gap-1 whitespace-nowrap">
          <UIcon name="i-lucide-chevrons-up-down" class="size-3.5" />
          Objectif : {{ objective.toLocaleString('fr-FR') }} €
        </UBadge>
        <div class="h-0.5 flex-1 border-t-2 border-dashed border-primary" />
      </div>
    </div>

    <div class="mt-6 flex flex-col items-center gap-1 text-center sm:flex-row sm:justify-center sm:gap-6">
      <p class="text-sm text-muted">Total {{ conventionalLabel.toLowerCase() }} : <span class="font-medium text-highlighted">{{ total.toLocaleString('fr-FR') }} €</span></p>
      <p class="text-sm text-muted">Total {{ cascadeLabel.toLowerCase() }} : <span class="font-medium text-highlighted">{{ objective.toLocaleString('fr-FR') }} €</span></p>
    </div>

    <div class="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
      <div v-for="c in contributors" :key="c.name" class="flex items-center gap-1.5 text-xs text-toned">
        <span class="size-2.5 rounded-full" :style="{ backgroundColor: c.color }" />
        {{ c.name }}
      </div>
    </div>

    <p class="mt-4 text-center text-xs text-dimmed">{{ hint }}</p>

    <div class="mt-4 rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-center">
      <span class="font-semibold text-primary">{{ saved.toLocaleString('fr-FR') }} € économisés collectivement</span>
      <span class="text-toned"> grâce à Cascade</span>
    </div>
  </div>
</template>
