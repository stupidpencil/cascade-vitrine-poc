<script setup lang="ts">
const props = withDefaults(defineProps<{
  side?: 'left' | 'right'
}>(), {
  side: 'left'
})

const waveId = `cascade-wave-${props.side}`

// Vertical transpose of the classic "gentle-wave" CodePen path:
// a filled band whose inner edge (toward the page content) undulates,
// while the outer edge runs off past the visible crop.
const wavePath = 'M44 -160c0 30 -18 58 -18 88s18 58 18 88 -18 58 -18 88 18 58 18 88h44v-352z'
</script>

<template>
  <div
    aria-hidden="true"
    class="pointer-events-none absolute inset-y-0 hidden w-16 overflow-hidden 2xl:block"
    :class="side === 'left' ? 'left-8' : 'right-8 scale-x-[-1]'"
  >
    <svg
      class="wave-parallax absolute inset-x-0 -top-32 -bottom-32 h-[calc(100%+16rem)] w-full"
      viewBox="20 -200 40 400"
      preserveAspectRatio="none"
    >
      <defs>
        <path :id="waveId" :d="wavePath" />
      </defs>
      <use :href="`#${waveId}`" x="0" y="0" fill="var(--ui-primary)" opacity="0.12" />
      <use :href="`#${waveId}`" x="3" y="0" fill="var(--ui-primary)" opacity="0.2" />
      <use :href="`#${waveId}`" x="5" y="0" fill="var(--ui-primary)" opacity="0.32" />
      <use :href="`#${waveId}`" x="7" y="0" fill="var(--ui-primary)" opacity="0.5" />
    </svg>
  </div>
</template>

<style scoped>
.wave-parallax > use {
  animation: cascade-wave-flow 22s cubic-bezier(.55, .5, .45, .5) infinite;
  transform-box: fill-box;
}

.wave-parallax > use:nth-child(1) { animation-delay: -2s; animation-duration: 9s; }
.wave-parallax > use:nth-child(2) { animation-delay: -4s; animation-duration: 13s; }
.wave-parallax > use:nth-child(3) { animation-delay: -6s; animation-duration: 17s; }
.wave-parallax > use:nth-child(4) { animation-delay: -8s; animation-duration: 22s; }

@keyframes cascade-wave-flow {
  0% { transform: translate3d(0, -55px, 0); }
  100% { transform: translate3d(0, 50px, 0); }
}

@media (prefers-reduced-motion: reduce) {
  .wave-parallax > use {
    animation: none;
  }
}
</style>
