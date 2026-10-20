<script setup>
import AppIcon from "./ui/AppIcon.vue";
import ViewOverlay from "./ui/ViewOverlay.vue";
import { asset } from "../utils";

const emit = defineEmits(["view"]);

// Tall Instagram-profile style frame: avatar header, image, liked/bookmarked footer + caption.
defineProps({
  image: String,
  alt: String,
  handle: String,
  avatar: String,
  ratio: { type: String, default: "1414 / 2000" },
  captionText: {
    type: String,
    default:
      "Instagram is a popular photo and video sharing social networking service",
  },
});
</script>

<template>
  <article
    class="flex flex-col overflow-hidden rounded-[0.9rem] border-2 border-[#252727] bg-white lg:row-span-2"
  >
    <header
      class="flex h-12 items-center justify-between px-3 lg:h-[3.75rem] lg:px-[1.5rem]"
    >
      <div class="flex min-w-0 items-center gap-2 lg:gap-[0.75rem]">
        <img
          :src="asset(avatar)"
          alt=""
          width="64"
          height="64"
          class="h-7 w-7 shrink-0 rounded-full object-cover lg:h-[1.9rem] lg:w-[1.9rem]"
        />
        <span class="truncate text-sm font-bold lg:text-[1.017rem]">{{
          handle
        }}</span>
      </div>
      <AppIcon
        name="menu"
        class="h-5 w-5 shrink-0 lg:h-[1.45rem] lg:w-[1.45rem]"
      />
    </header>

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
        loading="lazy"
        class="w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        :style="{ aspectRatio: ratio }"
      />
      <ViewOverlay />
    </button>

    <footer
      class="flex-1 px-3 pb-3 pt-3 lg:px-[1.3rem] lg:pb-[0.9rem] lg:pt-[0.85rem]"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3 lg:gap-[0.95rem]">
          <AppIcon
            name="heart-fill"
            class="h-6 w-6 text-[#f0202e] lg:h-[1.55rem] lg:w-[1.55rem]"
          />
          <AppIcon
            name="comment"
            class="h-6 w-6 lg:h-[1.55rem] lg:w-[1.55rem]"
          />
          <AppIcon name="share" class="h-6 w-6 lg:h-[1.55rem] lg:w-[1.55rem]" />
        </div>
        <AppIcon
          name="bookmark-fill"
          class="h-5 w-5 text-[#ffc21a] lg:h-[1.2rem] lg:w-[1.2rem]"
        />
      </div>
      <p
        class="mt-2 text-[0.65rem] leading-[1.65] lg:mt-[0.6rem] lg:text-[0.61rem] lg:leading-[1.8]"
      >
        <b class="font-bold">{{ handle }}</b> {{ captionText
        }}<span class="text-ink/40">...more</span>
      </p>
    </footer>
  </article>
</template>
