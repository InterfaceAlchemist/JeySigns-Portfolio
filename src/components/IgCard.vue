<script setup>
import AppIcon from "./ui/AppIcon.vue";
import ViewOverlay from "./ui/ViewOverlay.vue";
import { asset } from "../utils";

const emit = defineEmits(["view"]);

// Square post card with outline action icons (and optional username)
defineProps({ image: String, alt: String, handle: String });
</script>

<template>
  <article
    class="flex flex-col overflow-hidden rounded-[0.9rem] border-2 border-[#252727] bg-white"
  >
    <button
      type="button"
      class="group relative block w-full cursor-zoom-in overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand"
      :aria-label="`View full quality: ${alt}`"
      @click="emit('view')"
    >
      <img
        :src="asset(image)"
        :alt="alt"
        width="800"
        height="800"
        loading="lazy"
        class="aspect-square w-full object-cover transition duration-500 group-hover:scale-[1.04]"
      />
      <ViewOverlay />
    </button>
    <footer class="px-3 py-3 lg:px-[0.9rem] lg:py-[0.8rem]">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2.5 lg:gap-[0.7rem]">
          <AppIcon name="heart" class="h-5 w-5 lg:h-[1.2rem] lg:w-[1.2rem]" />
          <AppIcon name="comment" class="h-5 w-5 lg:h-[1.2rem] lg:w-[1.2rem]" />
          <AppIcon name="share" class="h-5 w-5 lg:h-[1.2rem] lg:w-[1.2rem]" />
        </div>
        <AppIcon name="bookmark" class="h-5 w-5 lg:h-[1.2rem] lg:w-[1.2rem]" />
      </div>
      <p
        v-if="handle"
        class="mt-2 text-[0.65rem] font-bold lg:mt-[0.85rem] lg:text-[0.61rem]"
      >
        {{ handle }}
      </p>
    </footer>
  </article>
</template>
