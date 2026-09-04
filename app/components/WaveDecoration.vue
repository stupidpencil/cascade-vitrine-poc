<script setup lang="ts">
const props = withDefaults(defineProps<{
  side?: 'left' | 'right'
}>(), {
  side: 'left'
})

// The wave oscillates between MIN_X (closest to the screen edge) and MAX_X
// (closest to the page content), over a tall, gentle PERIOD — a big swing
// relative to a long period reads as an ample, sweeping curve rather than
// a tight wiggle. REPEATS tiles copy of that one period back to back
// (via <use>, not by duplicating the path data) to cover a comfortable
// margin above any realistic hero height, so looping the flow animation
// by exactly one period never exposes an edge.
const MIN_X = 4
const MAX_X = 12
const PERIOD = 700
const REPEATS = 8
const TOTAL = PERIOD * REPEATS
const TILES = Array.from({ length: REPEATS }, (_, i) => i * PERIOD)

function buildUnitPath() {
  const half = PERIOD / 2
  const c1 = Math.round(half * 0.341)
  const c2 = Math.round(half * 0.659)
  return `M0 0 L${MAX_X} 0 C${MAX_X} ${c1} ${MIN_X} ${c2} ${MIN_X} ${half} C${MIN_X} ${half + c1} ${MAX_X} ${half + c2} ${MAX_X} ${PERIOD} L0 ${PERIOD} Z`
}

const unitPath = buildUnitPath()
const unitId = `cascade-wave-unit-${props.side}`

// Small phase offsets (a fraction of the period) so the layers blur
// together into a soft, layered edge instead of crossing each other
// like a braid.
const OFFSET_2 = PERIOD * 0.15
const OFFSET_3 = PERIOD * 0.30
</script>

<template>
  <div
    aria-hidden="true"
    class="pointer-events-none absolute inset-y-0 hidden w-36 overflow-hidden 2xl:block"
    :class="side === 'left' ? 'left-0 side-left' : 'right-0 side-right scale-x-[-1]'"
    :style="{ '--wave-period': `${PERIOD}px` }"
  >
    <!--
      A single shared <path> definition (one period of the curve), tiled
      REPEATS times via <use> — geometry is defined once and referenced,
      never duplicated — and the WHOLE <svg> is the one animated element
      per side (not the paths/layers inside it), so there's exactly one
      GPU-composited surface and one running animation per side. Earlier
      versions animated 3 (or, briefly, 3×2) separate large elements per
      side; whichever one the browser had to re-synchronize under memory
      pressure would visibly snap back mid-loop for a couple of frames
      while the others kept going. With only one animated element per
      side, that failure mode has nowhere left to happen.
    -->
    <svg
      class="wave-layer absolute inset-x-0 w-full"
      :style="{ top: `-${PERIOD}px` }"
      :height="TOTAL"
      :viewBox="`0 0 ${MAX_X + 10} ${TOTAL}`"
      preserveAspectRatio="none"
    >
      <defs>
        <path :id="unitId" :d="unitPath" />
      </defs>
      <g fill="var(--ui-primary)" opacity="0.18">
        <use v-for="y in TILES" :key="y" :href="`#${unitId}`" :y="y" />
      </g>
      <g fill="var(--ui-primary)" opacity="0.28" :transform="`translate(0, ${OFFSET_2})`">
        <use v-for="y in TILES" :key="y" :href="`#${unitId}`" :y="y" />
      </g>
      <g fill="var(--ui-primary)" opacity="0.9" :transform="`translate(0, ${OFFSET_3})`">
        <use v-for="y in TILES" :key="y" :href="`#${unitId}`" :y="y" />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.wave-layer {
  animation: cascade-wave-flow 16s linear infinite;
  will-change: transform;
  backface-visibility: hidden;
}

.side-left .wave-layer { animation-duration: 9s; }
.side-right .wave-layer { animation-duration: 10.8s; }

@keyframes cascade-wave-flow {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(0, var(--wave-period), 0); }
}

@media (prefers-reduced-motion: reduce) {
  .wave-layer {
    animation: none;
  }
}
</style>
