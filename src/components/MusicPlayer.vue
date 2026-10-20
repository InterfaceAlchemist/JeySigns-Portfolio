<script setup>
import { useMusic } from "../composables/useMusic";

const { playing, toggle } = useMusic();
</script>

<template>
  <button
    type="button"
    class="fixed bottom-4 right-4 z-[60] flex items-center gap-3 rounded-full border border-white/10 bg-ink/95 py-2.5 pl-3 pr-5 text-white shadow-xl backdrop-blur transition hover:scale-[1.03] sm:bottom-6 sm:right-6"
    :class="{ 'is-on': playing }"
    :aria-pressed="playing"
    :aria-label="playing ? 'Pause soundtrack' : 'Play soundtrack'"
    @click="toggle"
  >
    <!-- Vinyl -->
    <span
      class="vinyl relative grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-brand bg-black"
      :class="{ 'is-spinning': playing }"
    >
      <span
        class="absolute left-1/2 top-[2px] h-1.5 w-[3px] -translate-x-1/2 rounded-full bg-brand/80"
      ></span>
      <span
        class="grid h-5 w-5 place-items-center rounded-full border border-brand/60"
      >
        <span class="h-2 w-2 rounded-full bg-brand"></span>
      </span>
    </span>

    <span class="text-left leading-tight">
      <span
        class="block text-[0.5rem] font-bold uppercase tracking-[0.25em] text-white/45"
      >
        Portfolio soundtrack
      </span>
      <span class="block text-xs font-bold uppercase tracking-wide">
        {{ playing ? "Now playing" : "Paused" }}
      </span>
    </span>

    <!-- Equalizer bars -->
    <span class="eq ml-1 flex h-4 items-end gap-[3px]" aria-hidden="true">
      <span class="bar"></span><span class="bar"></span
      ><span class="bar"></span>
    </span>
  </button>
</template>

<style scoped>
.vinyl.is-spinning {
  animation: vinyl-spin 3s linear infinite;
}
@keyframes vinyl-spin {
  to {
    transform: rotate(360deg);
  }
}
.bar {
  width: 3px;
  height: 100%;
  border-radius: 2px;
  background: #ff5900;
  transform-origin: bottom;
  transform: scaleY(0.25);
}
.is-on .bar {
  animation: eq 0.9s ease-in-out infinite;
}
.is-on .bar:nth-child(2) {
  animation-delay: 0.2s;
}
.is-on .bar:nth-child(3) {
  animation-delay: 0.4s;
}
@keyframes eq {
  0%,
  100% {
    transform: scaleY(0.25);
  }
  50% {
    transform: scaleY(1);
  }
}
@media (prefers-reduced-motion: reduce) {
  .vinyl.is-spinning,
  .is-on .bar {
    animation: none;
  }
}
</style>
