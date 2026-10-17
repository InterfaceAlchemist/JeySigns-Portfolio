<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import AppIcon from "./ui/AppIcon.vue";
import { asset } from "../utils";

const props = defineProps({
  items: { type: Array, required: true },
  index: { type: Number, default: -1 },
});
const emit = defineEmits(["close", "change"]);

const current = computed(() => props.items[props.index]);
const isOpen = computed(() => props.index >= 0 && !!current.value);
const thumbSrc = computed(() =>
  current.value ? asset(current.value.image) : "",
);
// The PNG sits next to the WebP with the same name
const fullSrc = computed(() =>
  current.value ? thumbSrc.value.replace(/\.webp$/, ".png") : "",
);
const filename = computed(() => fullSrc.value.split("/").pop());

const loaded = ref(false);
const failed = ref(false);

watch(
  () => props.index,
  (i) => {
    loaded.value = false;
    failed.value = false;
    document.body.classList.toggle("is-locked", i >= 0);
    if (i < 0 || !current.value) return;
    const src = fullSrc.value;
    const img = new Image();
    img.onload = () => src === fullSrc.value && (loaded.value = true);
    img.onerror = () => src === fullSrc.value && (failed.value = true);
    img.src = src;
  },
);

const step = (dir) =>
  emit("change", (props.index + dir + props.items.length) % props.items.length);

const onKey = (e) => {
  if (!isOpen.value) return;
  if (e.key === "Escape") emit("close");
  if (e.key === "ArrowRight") step(1);
  if (e.key === "ArrowLeft") step(-1);
};
onMounted(() => window.addEventListener("keydown", onKey));
onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKey);
  document.body.classList.remove("is-locked");
});
</script>

<template>
  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[90] flex flex-col bg-black/90 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        :aria-label="`Poster preview: ${current.alt}`"
        @click.self="emit('close')"
      >
        <!-- Top bar -->
        <div
          class="flex items-center justify-between gap-3 p-4 text-white sm:p-6"
          @click.self="emit('close')"
        >
          <p class="truncate text-sm">{{ current.alt }}</p>
          <div class="flex shrink-0 gap-2">
            <a
              :href="failed ? thumbSrc : fullSrc"
              :download="failed ? thumbSrc.split('/').pop() : filename"
              class="inline-flex h-10 items-center gap-2 rounded-md bg-brand px-4 text-sm font-bold text-white transition hover:brightness-110"
            >
              <AppIcon name="download" class="h-4 w-4" /> Download
            </a>
            <button
              type="button"
              aria-label="Close preview"
              class="grid h-10 w-10 place-items-center rounded-md border border-white/30 transition hover:bg-white/10"
              @click="emit('close')"
            >
              <AppIcon name="close" class="h-5 w-5" />
            </button>
          </div>
        </div>

        <!-- Image area -->
        <div
          class="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 sm:px-20"
          @click.self="emit('close')"
        >
          <button
            v-if="items.length > 1"
            type="button"
            aria-label="Previous poster"
            class="absolute left-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/25 sm:left-5"
            @click="step(-1)"
          >
            <AppIcon name="chevron-left" class="h-6 w-6" />
          </button>

          <div class="relative">
            <!-- Blurred WebP shows first and sets the size -->
            <img
              :src="thumbSrc"
              alt=""
              class="h-[calc(100dvh-8rem)] w-auto max-w-full object-contain transition duration-500"
              :class="loaded || failed ? '' : 'scale-[1.01] blur-md'"
            />
            <!-- Full-quality PNG fades in on top once downloaded -->
            <img
              v-if="!failed"
              :src="fullSrc"
              :alt="current.alt"
              class="absolute inset-0 h-full w-full object-contain transition-opacity duration-500"
              :class="loaded ? 'opacity-100' : 'opacity-0'"
            />
            <div
              v-if="!loaded && !failed"
              class="absolute inset-0 grid place-items-center"
            >
              <span
                class="h-9 w-9 animate-spin rounded-full border-2 border-white/30 border-t-white"
              ></span>
            </div>
          </div>

          <button
            v-if="items.length > 1"
            type="button"
            aria-label="Next poster"
            class="absolute right-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/25 sm:right-5"
            @click="step(1)"
          >
            <AppIcon name="chevron-right" class="h-6 w-6" />
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.25s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
