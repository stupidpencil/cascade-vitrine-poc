<script setup lang="ts">
const props = withDefaults(defineProps<{
  side?: 'left' | 'right'
}>(), {
  side: 'left'
})

// The wave oscillates between MIN_X (closest to the screen edge) and MAX_X
// (closest to the page content), over a tall, gentle PERIOD — a big swing
// relative to a long period reads as an ample, sweeping curve rather than
// a tight wiggle. The shape is repeated REPEATS times back to back (each
// period starts and ends at MAX_X, so the seams are invisible), tall enough
// that looping the flow animation by exactly one period never exposes an edge.
const MIN_X = 4
const MAX_X = 70
const PERIOD = 300
const REPEATS = 10
const TOTAL = PERIOD * REPEATS

function buildPath() {
  const half = PERIOD / 2
  const c1 = Math.round(half * 0.341)
  const c2 = Math.round(half * 0.659)
  let d = `M0 0 L${MAX_X} 0`
  for (let i = 0; i < REPEATS; i++) {
    const o = i * PERIOD
    d += ` C${MAX_X} ${o + c1} ${MIN_X} ${o + c2} ${MIN_X} ${o + half}`
    d += ` C${MIN_X} ${o + half + c1} ${MAX_X} ${o + half + c2} ${MAX_X} ${o + PERIOD}`
  }
  d += ` L0 ${TOTAL} Z`
  return d
}

const wavePath = buildPath()

// Small phase offsets (a fraction of the period) so the layers blur
// together into a soft, layered edge instead of crossing each other
// like a braid.
const OFFSET_2 = PERIOD * 0.07
const OFFSET_3 = PERIOD * 0.14
</script>

<template>
  <div
    aria-hidden="true"
    class="pointer-events-none absolute inset-y-0 hidden w-36 overflow-hidden 2xl:block"
    :class="side === 'left' ? 'left-0 side-left' : 'right-0 side-right scale-x-[-1]'"
  >
    <svg
      class="absolute inset-x-0 -top-[75px] w-full"
      :height="TOTAL"
      :viewBox="`0 0 ${MAX_X + 10} ${TOTAL}`"
      preserveAspectRatio="none"
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

.side-left .wave-layer-1 { animation-duration: 20s; }
.side-left .wave-layer-2 { animation-duration: 27s; animation-delay: -6s; }
.side-left .wave-layer-3 { animation-duration: 33s; animation-delay: -14s; }

.side-right .wave-layer-1 { animation-duration: 24s; animation-delay: -9s; }
.side-right .wave-layer-2 { animation-duration: 30s; animation-delay: -2s; }
.side-right .wave-layer-3 { animation-duration: 38s; animation-delay: -19s; }

@keyframes cascade-wave-flow {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(0, 300px, 0); }
}

@media (prefers-reduced-motion: reduce) {
  .wave-layer {
    animation: none;
  }
}
</style>
