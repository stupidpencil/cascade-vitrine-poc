<script setup lang="ts">
const props = withDefaults(defineProps<{
  side?: 'left' | 'right'
}>(), {
  side: 'left'
})

// One period of the wave is 176 units tall, oscillating between x=14 and x=48.
// The shape is built by repeating that period back to back (start/end x
// always match at 48, so the seams between repeats are invisible) — this
// gives a continuous band with a flat outer edge (x=0, toward the screen edge)
// and a wavy inner edge (toward the page content), tall enough that looping
// the flow animation by exactly one period (176px) never exposes an edge.
const PERIOD = 176
const REPEATS = 14
const TOTAL = PERIOD * REPEATS

function buildPath() {
  let d = 'M0 0 L48 0'
  for (let i = 0; i < REPEATS; i++) {
    const o = i * PERIOD
    d += ` C48 ${o + 30} 14 ${o + 58} 14 ${o + 88} C14 ${o + 118} 48 ${o + 146} 48 ${o + 176}`
  }
  d += ` L0 ${TOTAL} Z`
  return d
}

const wavePath = buildPath()

// Small phase offsets (a fraction of the period) so the layers blur
// together into a soft, layered edge instead of crossing each other
// like a braid.
const OFFSET_2 = 12
const OFFSET_3 = 24
</script>

<template>
  <div
    aria-hidden="true"
    class="pointer-events-none absolute inset-y-0 hidden w-24 overflow-hidden 2xl:block"
    :class="side === 'left' ? 'left-0 side-left' : 'right-0 side-right scale-x-[-1]'"
  >
    <svg
      class="absolute inset-x-0 -top-44 w-full"
      :height="TOTAL"
      :viewBox="`0 0 70 ${TOTAL}`"
    >
      <path class="wave-layer wave-layer-1" :d="wavePath" fill="var(--ui-primary)" opacity="0.18" />
      <g :transform="`translate(0, ${OFFSET_2})`">
        <path class="wave-layer wave-layer-2" :d="wavePath" fill="var(--ui-primary)" opacity="0.28" />
      </g>
      <g :transform="`translate(0, ${OFFSET_3})`">
        <path class="wave-layer wave-layer-3" :d="wavePath" fill="var(--ui-primary)" opacity="0.42" />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.wave-layer {
  animation: cascade-wave-flow 16s linear infinite;
  transform-box: fill-box;
}

.side-left .wave-layer-1 { animation-duration: 14s; }
.side-left .wave-layer-2 { animation-duration: 19s; animation-delay: -4s; }
.side-left .wave-layer-3 { animation-duration: 23s; animation-delay: -9s; }

.side-right .wave-layer-1 { animation-duration: 17s; animation-delay: -6s; }
.side-right .wave-layer-2 { animation-duration: 21s; animation-delay: -1s; }
.side-right .wave-layer-3 { animation-duration: 27s; animation-delay: -13s; }

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
