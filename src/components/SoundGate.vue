<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useMusic } from "../composables/useMusic";

const emit = defineEmits(["enter"]);
const { play } = useMusic();
const leaving = ref(false);
const enterBtn = ref(null);

onMounted(() => {
  document.body.classList.add("is-locked");
  enterBtn.value?.focus();
});
onBeforeUnmount(() => document.body.classList.remove("is-locked"));

const enter = (withSound) => {
  if (withSound) play(); // must run inside the click so the browser allows audio
  leaving.value = true;
  setTimeout(() => emit("enter"), 600);
};
</script>

<template>
  <div
    class="fixed inset-0 z-[95] grid place-items-center bg-black/50 p-4 backdrop-blur-lg transition-opacity duration-[600ms]"
    :class="leaving ? 'opacity-0' : 'opacity-100'"
    role="dialog"
    aria-modal="true"
    aria-label="Enter the portfolio"
  >
    <div
      class="w-full max-w-[46rem] rounded-[1.4rem] border border-white/10 bg-ink/90 px-6 py-12 text-center text-white shadow-2xl sm:px-12 sm:py-16"
    >
      <p
        class="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-white/50 sm:text-xs"
      >
        Jeremy Macaspac · Creative Developer &amp; Designer
      </p>

      <h2
        class="mt-5 text-[2.6rem] font-bold leading-[1.05] text-white sm:text-[4.2rem] lg:text-[5rem]"
      >
        enter the
        <span class="block text-brand">portfolio</span>
      </h2>

      <p class="mt-6 text-sm text-white/70">Best experienced with sound on.</p>

      <button
        ref="enterBtn"
        type="button"
        class="mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] outline-none transition hover:!border-transparent hover:bg-brand focus-visible:border-white/50"
        @click="enter(true)"
      >
        Enter the portfolio <span aria-hidden="true">↗</span>
      </button>

      <div>
        <button
          type="button"
          class="mt-5 text-[0.6rem] uppercase tracking-[0.25em] text-white/50 transition hover:text-white"
          @click="enter(false)"
        >
          <span
            class="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-brand align-middle"
          ></span>
          Sound on · or continue without sound
        </button>
      </div>
    </div>
  </div>
</template>
