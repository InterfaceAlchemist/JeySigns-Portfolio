<script setup>
import MetaItem from "./ui/MetaItem.vue";
import { asset } from "../utils";
import { posters } from "../data/graphic";

import { computed, ref } from "vue";
import AppIcon from "./ui/AppIcon.vue";
import PosterLightbox from "./PosterLightbox.vue";

const viewable = computed(() => posters.rows.flat().filter((p) => p.image)); // skips the placeholder
const activeIndex = ref(-1);
const openPoster = (poster) =>
  (activeIndex.value = viewable.value.indexOf(poster));
</script>

<template>
  <section
    id="posters"
    class="bg-ink pb-12 pt-12 text-white lg:pb-[2.5rem] lg:pt-[3.4rem]"
  >
    <div class="wrap">
      <header
        v-reveal
        class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1"
      >
        <h3
          class="text-[1.6rem] font-bold uppercase leading-tight sm:text-[2rem] lg:text-[2.277rem]"
        >
          Poster Design
        </h3>
        <p class="text-sm lg:text-[1.027rem]">Selected Works</p>
      </header>

      <!-- <lg: one flat responsive grid · lg+: three rows exactly like the Figma -->
      <div
        class="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:mt-[2.3rem] lg:block lg:space-y-[2.15rem]"
      >
        <ul
          v-for="(row, rowIndex) in posters.rows"
          :key="rowIndex"
          class="contents"
          :class="
            rowIndex < 2
              ? 'lg:grid lg:grid-cols-7 lg:gap-[0.95rem]'
              : 'lg:flex lg:items-start lg:justify-between'
          "
        >
          <li
            v-for="poster in row"
            :key="poster.alt"
            v-reveal
            class="relative aspect-[4/5] overflow-hidden border border-white/35 bg-white/5"
            :class="
              rowIndex < 2
                ? 'lg:aspect-[156/195]'
                : 'lg:h-[9.7rem] lg:shrink-0 lg:[aspect-ratio:var(--ar)]'
            "
            :style="poster.ratio ? { '--ar': poster.ratio } : {}"
          >
            <button
              v-if="poster.image"
              type="button"
              class="group relative block h-full w-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              :aria-label="`View full quality: ${poster.alt}`"
              @click="openPoster(poster)"
            >
              <img
                :src="asset(poster.image)"
                :alt="poster.alt"
                loading="lazy"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
              />

              <!-- Hover: slight dark blur + eye icon -->
              <span
                class="pointer-events-none absolute inset-0 grid place-items-center bg-black/45 opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
              >
                <span
                  class="grid h-11 w-11 scale-90 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/50 transition duration-300 group-hover:scale-100"
                >
                  <AppIcon name="eye" class="h-5 w-5" />
                </span>
              </span>

              <!-- Phones and tablets have no hover, so show a small eye badge instead -->
              <span
                class="pointer-events-none absolute bottom-1.5 right-1.5 grid h-7 w-7 place-items-center rounded-full bg-black/55 text-white [@media(hover:hover)]:hidden"
              >
                <AppIcon name="eye" class="h-4 w-4" />
              </span>
            </button>

            <div
              v-else
              class="grid h-full w-full place-items-center bg-gradient-to-br from-[#1f8fd6] via-[#3db7a4] to-[#7bd34a] p-2 text-center"
              role="img"
              :aria-label="poster.alt"
            >
              <span
                class="text-[0.6rem] font-bold uppercase leading-tight text-white drop-shadow lg:text-[0.533rem]"
              >
                {{ poster.placeholder }}
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div
        class="mt-6 flex flex-wrap justify-between gap-x-6 gap-y-1 lg:mt-[2.6rem]"
      >
        <MetaItem
          v-for="m in posters.meta"
          :key="m.label"
          :label="m.label"
          :value="m.value"
        />
      </div>
    </div>

    <PosterLightbox
      :items="viewable"
      :index="activeIndex"
      @close="activeIndex = -1"
      @change="activeIndex = $event"
    />
  </section>
</template>
