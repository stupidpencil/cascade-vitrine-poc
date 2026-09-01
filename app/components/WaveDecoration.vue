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
// This decoration only ever needs to cover the hero section's own height
// (it's clipped to its parent, not the full page), so REPEATS just needs a
// comfortable margin above any realistic hero height — keep it small: an
// oversized SVG (e.g. the previous 100 repeats, 70000px tall) can exceed the
// GPU's compositing tile size and cause an intermittent seam to flash during
// the transform animation.
const MIN_X = 4
const MAX_X = 12
const PERIOD = 700
const REPEATS = 8
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
      Each layer is its OWN top-level embedded <svg> (a normal replaced HTML
      element, like an <img>) rather than a <path> animated with
      `transform-box: fill-box` inside one shared <svg>. Animating shape
      geometry inside an SVG needs fill-box to make the translation
      unambiguous, but that property has a long history of spec churn and
      inconsistent/expensive handling across browsers — including periodic
      recomputation glitches that broke the wave shape for a second or two
      every few seconds. A top-level <svg> has unambiguous border-box
      transform behavior with no such recomputation, so the exact same
      translate animation is cheap and stable here.
    -->
    <svg
      v-for="(layer, i) in [
        { opacity: 0.18, offset: 0 },
        { opacity: 0.28, offset: OFFSET_2 },
        { opacity: 0.9, offset: OFFSET_3 }
      ]"
      :key="i"
      class="wave-layer absolute inset-x-0 w-full"
      :style="{ top: `-${PERIOD - layer.offset}px` }"
      :height="TOTAL"
      :viewBox="`0 0 ${MAX_X + 10} ${TOTAL}`"
      preserveAspectRatio="none"
    >
      <path :d="wavePath" fill="var(--ui-primary)" :opacity="layer.opacity" />
    </svg>
  </div>
</template>

<style scoped>
.wave-layer {
  animation: cascade-wave-flow 16s linear infinite;
  will-change: transform;
  backface-visibility: hidden;
}

/* The 3 layers within a side share one duration on purpose: their spatial
   offsets (OFFSET_2/OFFSET_3) already create the soft layered blend, and
   keeping that relative phase FIXED avoids a "beat" effect where layers
   moving at different speeds drift in and out of alignment — which
   periodically made the combined silhouette look flatter/boxier for a
   second or two. Left and right still run at different speeds from each
   other. */
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
