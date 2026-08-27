<script setup lang="ts">
const props = withDefaults(defineProps<{
  side?: 'left' | 'right'
}>(), {
  side: 'left'
})

const waveId = `cascade-wave-${props.side}`

// A vertical sine-like wiggle, 8 periods of 50 units (400 total),
// stretched to fill the container height via preserveAspectRatio="none".
const wavePath = [
  'M20 0',
  'C32 12.5 8 12.5 20 25', 'C32 37.5 8 37.5 20 50',
  'C32 62.5 8 62.5 20 75', 'C32 87.5 8 87.5 20 100',
  'C32 112.5 8 112.5 20 125', 'C32 137.5 8 137.5 20 150',
  'C32 162.5 8 162.5 20 175', 'C32 187.5 8 187.5 20 200',
  'C32 212.5 8 212.5 20 225', 'C32 237.5 8 237.5 20 250',
  'C32 262.5 8 262.5 20 275', 'C32 287.5 8 287.5 20 300',
  'C32 312.5 8 312.5 20 325', 'C32 337.5 8 337.5 20 350',
  'C32 362.5 8 362.5 20 375', 'C32 387.5 8 387.5 20 400'
].join(' ')
</script>

<template>
  <div
    aria-hidden="true"
    class="pointer-events-none absolute inset-y-0 hidden w-10 overflow-hidden 2xl:block"
    :class="side === 'left' ? 'left-6' : 'right-6'"
  >
    <svg
      class="wave-parallax absolute inset-x-0 -top-24 -bottom-24 h-[calc(100%+12rem)] w-full"
      viewBox="0 0 40 400"
      preserveAspectRatio="none"
    >
      <defs>
        <path :id="waveId" :d="wavePath" fill="none" stroke="var(--ui-primary)" stroke-width="2" />
      </defs>
      <use :href="`#${waveId}`" x="-4" opacity="0.15" />
      <use :href="`#${waveId}`" x="-2" opacity="0.22" />
      <use :href="`#${waveId}`" x="0" opacity="0.3" />
      <use :href="`#${waveId}`" x="2" opacity="0.4" />
    </svg>
  </div>
</template>

<style scoped>
.wave-parallax > use {
  animation: cascade-wave-flow 20s cubic-bezier(.55, .5, .45, .5) infinite;
  transform-box: fill-box;
}

.wave-parallax > use:nth-child(1) { animation-delay: -2s; animation-duration: 9s; }
.wave-parallax > use:nth-child(2) { animation-delay: -4s; animation-duration: 13s; }
.wave-parallax > use:nth-child(3) { animation-delay: -6s; animation-duration: 17s; }
.wave-parallax > use:nth-child(4) { animation-delay: -8s; animation-duration: 20s; }

@keyframes cascade-wave-flow {
  0% { transform: translate3d(0, -40px, 0); }
  100% { transform: translate3d(0, 40px, 0); }
}

@media (prefers-reduced-motion: reduce) {
  .wave-parallax > use {
    animation: none;
  }
}
</style>
