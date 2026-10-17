<script setup>
import { computed } from 'vue'
import MetaItem from './ui/MetaItem.vue'
import { asset } from '../utils'

const props = defineProps({ design: { type: Object, required: true } })

const dark = computed(() => props.design.theme === 'dark')
const stroke = computed(() => asset(dark.value ? 'images/shirts/stroke-dark.webp' : 'images/shirts/stroke-light.webp'))
</script>

<template>
  <section
    class="relative overflow-hidden pb-12 pt-10 lg:pb-[2.6rem] lg:pt-[3rem]"
    :class="dark ? 'bg-ink text-white' : 'bg-white text-ink'"
  >
    <div class="wrap">
      <header v-reveal class="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
        <h3 class="text-[1.7rem] font-bold uppercase leading-[1.2] sm:text-[2.2rem] lg:text-[2.277rem]">
          <span class="text-brand">{{ design.number }}</span> - Shirt Design
        </h3>
        <p class="text-sm font-bold sm:text-base lg:text-right lg:text-[1.027rem]">{{ design.subtitle }}</p>
      </header>

      <div class="relative mt-8 lg:mt-[6.75rem] lg:min-h-[33.8rem]">
        <!-- Huge outlined "SHIRT DESIGN" watermark (full-bleed on desktop) -->
        <img
          :src="stroke"
          alt=""
          aria-hidden="true"
          width="2400"
          height="1044"
          loading="lazy"
          class="pointer-events-none absolute left-1/2 top-[-5.9rem] hidden w-screen max-w-none -translate-x-1/2 select-none lg:block"
        />

        <div class="relative grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_30rem] lg:gap-[2.2rem]">
          <div v-reveal class="flex items-start justify-center">
            <img
              v-for="img in design.images"
              :key="img.src"
              :src="asset(img.src)"
              :alt="img.alt"
              :width="img.width"
              :height="img.height"
              loading="lazy"
              class="h-auto"
              :class="design.images.length > 1 ? 'w-1/2 lg:w-[49.5%]' : 'w-full max-w-[34rem] lg:max-w-none'"
            />
          </div>

          <div v-reveal class="text-[0.85rem] leading-[1.6] lg:text-[0.807rem] lg:leading-[1.2]">
            <p v-for="(p, i) in design.paragraphs" :key="i" class="text-left sm:text-justify" :class="i ? 'mt-4 lg:mt-[1rem]' : ''">
              {{ p }}
            </p>

            <h4 class="mt-8 font-bold lg:mt-[2.3rem]">{{ design.languageTitle }}</h4>
            <ul class="mt-3 space-y-3 lg:mt-[0.9rem] lg:space-y-[0.7rem]">
              <li
                v-for="item in design.language"
                :key="item.term"
                class="relative pl-4 text-left before:absolute before:left-0 before:content-['•'] sm:text-justify lg:pl-[0.8rem]"
              >
                <b class="font-bold">{{ item.term }}</b> {{ item.text }}
              </li>
            </ul>

            <p class="mx-auto mt-8 max-w-[30rem] text-center text-brand lg:mt-[2.4rem]">{{ design.quote }}</p>
          </div>
        </div>
      </div>

      <div class="mt-8 flex flex-wrap justify-between gap-x-6 gap-y-1 lg:mt-[1.7rem]">
        <MetaItem v-for="m in design.meta" :key="m.label" :label="m.label" :value="m.value" />
      </div>
    </div>
  </section>
</template>
