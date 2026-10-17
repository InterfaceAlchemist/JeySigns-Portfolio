<script setup>
import { computed } from "vue";
import AppIcon from "./ui/AppIcon.vue";
import { asset } from "../utils";

const props = defineProps({ project: { type: Object, required: true } });

const hasLinks = computed(() => Boolean(props.project.source));
const iconPaths = computed(() =>
  props.project.tools.map((t) => ({
    name: t,
    src: asset(`images/icons/${t}.png`),
  })),
);
</script>

<template>
  <article
    class="flex flex-col rounded-[0.9rem] border border-line bg-gradient-to-b from-ink from-55% to-[#2e2e2e] p-4 lg:p-[1.2rem]"
  >
    <div class="overflow-hidden rounded-md bg-black/30">
      <img
        :src="asset(project.image)"
        :alt="`${project.title} — project screenshot`"
        width="1200"
        height="591"
        loading="lazy"
        class="aspect-[2080/1024] w-full object-cover"
      />
    </div>

    <!-- Title row -->
    <div
      class="mt-5 flex flex-wrap items-center justify-between gap-3 lg:mt-[1.55rem] lg:flex-nowrap"
    >
      <h3
        class="text-lg font-bold leading-[1.3] sm:text-xl"
        :class="project.titleClass"
      >
        {{ project.title }}
      </h3>
      <ul v-if="hasLinks" class="flex shrink-0 gap-2" aria-label="Tools used">
        <li
          v-for="icon in iconPaths"
          :key="icon.name"
          class="grid h-9 w-9 place-items-center rounded-full border border-[#2b2c38] bg-[#1e1e1e] lg:h-[2.5rem] lg:w-[2.5rem]"
        >
          <img
            :src="icon.src"
            :alt="icon.name"
            class="max-h-[55%] max-w-[55%] object-contain"
          />
        </li>
      </ul>
    </div>

    <p
      class="mt-3 text-[0.85rem] lg:text-[0.814rem]"
      :class="
        project.loose
          ? 'leading-[2.1] lg:mt-[0.9rem] lg:leading-[2.85]'
          : 'leading-[1.75] lg:mt-[1.2rem] lg:leading-[1.95]'
      "
    >
      {{ project.description }}
    </p>

    <!-- Actions -->
    <div class="mt-auto flex flex-wrap items-center gap-3 pt-6 lg:pt-[2rem]">
      <template v-if="hasLinks">
        <a
          :href="project.source"
          target="_blank"
          rel="noopener"
          class="inline-flex h-10 items-center gap-2.5 rounded-md border border-[#cf93e0]/50 bg-gradient-to-b from-[#bf73d4] to-[#784885] px-4 text-[0.9rem] text-white transition hover:brightness-110 lg:h-[2.55rem] lg:px-[1.1rem] lg:text-[1.008rem]"
        >
          <AppIcon name="github" class="h-5 w-5" /> Source Code
        </a>
        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener"
          class="inline-flex h-10 items-center gap-2.5 rounded-md border border-[#b46cc9] px-4 text-[0.9rem] text-[#c98ae0] transition hover:bg-[#b46cc9]/15 lg:h-[2.55rem] lg:px-[1.1rem] lg:text-[1.008rem]"
        >
          Live Demo <AppIcon name="external" class="h-[1.05rem] w-[1.05rem]" />
        </a>
        <a
          :href="project.caseStudy"
          class="ml-auto inline-flex items-center gap-2 text-[0.9rem] text-[#f1674f] transition hover:text-[#ff8a74] lg:text-[1.008rem]"
        >
          Case Study <AppIcon name="case" class="h-[1.05rem] w-[1.05rem]" />
        </a>
      </template>
      <template v-else>
        <a
          :href="project.caseStudy"
          class="inline-flex h-10 items-center gap-2.5 rounded-md border border-[#f58b78]/60 bg-gradient-to-b from-[#f1674f] to-[#9e3927] px-4 text-[0.9rem] text-white transition hover:brightness-110 lg:h-[2.55rem] lg:px-[1.5rem] lg:text-[1.008rem]"
        >
          Case Study <AppIcon name="case" class="h-[1.05rem] w-[1.05rem]" />
        </a>
        <ul class="ml-auto flex shrink-0 gap-2" aria-label="Tools used">
          <li
            v-for="icon in iconPaths"
            :key="icon.name"
            class="grid h-9 w-9 place-items-center rounded-full border border-[#2b2c38] bg-[#1e1e1e] lg:h-[2.5rem] lg:w-[2.5rem]"
          >
            <img
              :src="icon.src"
              :alt="icon.name"
              class="max-h-[55%] max-w-[55%] object-contain"
            />
          </li>
        </ul>
      </template>
    </div>
  </article>
</template>
