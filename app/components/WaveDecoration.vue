<script setup lang="ts">
const props = withDefaults(defineProps<{
  side?: 'left' | 'right'
}>(), {
  side: 'left'
})

// One period of the wave is 176 units tall, oscillating between x=26 and x=44.
// The shape is built by repeating that period 12 times back to back (start/end
// x always match at 44, so the seams between repeats are invisible) — this
// gives a continuous band with a flat outer edge (x=0, toward the screen edge)
// and a wavy inner edge (toward the page content), tall enough that looping
// the flow animation by exactly one period (176px) never exposes an edge.
const PERIOD = 176
const REPEATS = 12
const TOTAL = PERIOD * REPEATS

function buildPath() {
  let d = 'M0 0 L44 0'
  for (let i = 0; i < REPEATS; i++) {
    const o = i * PERIOD
    d += ` C44 ${o + 30} 26 ${o + 58} 26 ${o + 88} C26 ${o + 118} 44 ${o + 146} 44 ${o + 176}`
  }
  d += ` L0 ${TOTAL} Z`
  return d
}

const wavePath = buildPath()
</script>

<template>
  <div
    aria-hidden="true"
    class="pointer-events-none absolute inset-y-0 hidden w-16 overflow-hidden 2xl:block"
    :class="side === 'left' ? 'left-8' : 'right-8 scale-x-[-1]'"
  >
    <svg
      class="absolute inset-x-0 -top-44 w-full"
      :height="TOTAL"
      :viewBox="`0 0 64 ${TOTAL}`"
    >
      <path class="wave-layer wave-layer-1" :d="wavePath" fill="var(--ui-primary)" opacity="0.14" />
      <g :transform="`translate(0, ${PERIOD * 0.33})`">
        <path class="wave-layer wave-layer-2" :d="wavePath" fill="var(--ui-primary)" opacity="0.22" />
      </g>
      <g :transform="`translate(0, ${PERIOD * 0.66})`">
        <path class="wave-layer wave-layer-3" :d="wavePath" fill="var(--ui-primary)" opacity="0.34" />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.wave-layer {
  animation: cascade-wave-flow 16s linear infinite;
  transform-box: fill-box;
}

.wave-layer-1 { animation-duration: 14s; }
.wave-layer-2 { animation-duration: 19s; animation-delay: -4s; }
.wave-layer-3 { animation-duration: 23s; animation-delay: -9s; }

@keyframes cascade-wave-flow {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(0, 176px, 0); }
}

@media (prefers-reduced-motion: reduce) {
  .wave-layer {
    animation: none;
  }
}
</style>
