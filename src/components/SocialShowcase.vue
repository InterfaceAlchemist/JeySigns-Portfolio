<script setup>
import { computed, ref } from "vue";
import PosterLightbox from "./PosterLightbox.vue";
import MetaItem from "./ui/MetaItem.vue";
import IgFrame from "./IgFrame.vue";
import IgCard from "./IgCard.vue";

const active = ref(-1);

const props = defineProps({ data: { type: Object, required: true } });

const isArgus = computed(() => props.data.layout === "argus");
// Desktop column proportions come straight from the Figma (340/340/233/233 and 254/254/254/386)
const columns = computed(() =>
  isArgus.value
    ? "lg:grid-cols-[340fr_340fr_233fr_233fr]"
    : "lg:grid-cols-[254fr_254fr_254fr_386fr]",
);
</script>

<template>
  <div class="wrap">
    <header
      v-reveal
      class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1"
    >
      <div class="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h3
          class="text-[1.6rem] font-bold uppercase leading-tight sm:text-[2rem] lg:text-[2.277rem]"
        >
          {{ data.title }}
        </h3>
        <span class="text-sm lg:text-[1.027rem]">{{ data.tag }}</span>
      </div>
      <p class="text-sm lg:text-[1.027rem]">{{ data.series }}</p>
    </header>

    <div
      class="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-[1.8rem] lg:gap-x-[1rem] lg:gap-y-[0.85rem]"
      :class="columns"
    >
      <template v-for="(item, i) in data.items" :key="item.image">
        <IgFrame
          v-if="item.type === 'frame'"
          v-reveal
          :image="item.image"
          :alt="item.alt"
          :handle="item.handle"
          :avatar="item.avatar"
          :ratio="isArgus ? '1414 / 2000' : '735 / 919'"
          :caption-text="item.captionText"
          :class="
            isArgus ? '' : 'order-last col-span-2 lg:order-none lg:col-span-1'
          "
          @view="active = i"
        />
        <IgCard
          v-else
          v-reveal
          :image="item.image"
          :alt="item.alt"
          :handle="item.handle"
          @view="active = i"
        />
      </template>
    </div>

    <div
      class="mt-5 flex flex-wrap justify-between gap-x-6 gap-y-1 lg:mt-[1.4rem]"
    >
      <MetaItem
        v-for="m in data.meta"
        :key="m.label"
        :label="m.label"
        :value="m.value"
      />
    </div>

    <PosterLightbox
      :items="data.items"
      :index="active"
      @close="active = -1"
      @change="active = $event"
    />
  </div>
</template>
