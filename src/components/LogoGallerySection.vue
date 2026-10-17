<script setup>
import MarqueeBand from "./ui/MarqueeBand.vue";
import { asset } from "../utils";
import { logos } from "../data/logos";
</script>

<template>
  <section id="logo-gallery">
    <MarqueeBand text="Logo Gallery" :count="16" />

    <!-- 1px gaps over a black background draw the Figma grid lines -->
    <ul class="grid grid-cols-2 gap-px bg-black lg:grid-cols-4">
      <li
        v-for="logo in logos"
        :key="logo.name"
        v-reveal
        class="flex h-[17rem] flex-col items-center justify-between bg-white px-4 pb-10 pt-9 text-center lg:h-[25.6rem] lg:pb-[4.05rem] lg:pt-[3.55rem]"
      >
        <span class="text-[0.7rem] uppercase lg:text-[0.756rem]">{{
          logo.type
        }}</span>
        <img
          :src="asset(logo.image)"
          :alt="`${logo.name} logo`"
          loading="lazy"
          class="h-auto max-h-[7.5rem] max-w-[88%] object-contain lg:max-h-none lg:max-w-none"
          :class="[
            'w-[7rem] sm:w-[8.5rem]',
            logo.type === 'Combination Mark' ? 'max-lg:!w-[10rem]' : '',
            logo.width,
          ]"
        />
        <span class="text-[0.7rem] lg:text-[0.756rem]">{{ logo.name }}</span>
      </li>
    </ul>
  </section>
</template>
