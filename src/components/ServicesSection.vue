<script setup>
import SectionLabel from './ui/SectionLabel.vue'
import { services } from '../data/site'
</script>

<template>
  <section id="services" class="bg-white pb-16 pt-14 lg:pb-[8.8rem] lg:pt-[4.2rem]">
    <div class="wrap">
      <div v-reveal>
        <SectionLabel number="01" label="What I create" />
        <h2 class="mt-6 text-[1.7rem] font-bold leading-[1.2] sm:text-[2.2rem] lg:mt-[2.5rem] lg:text-[2.132rem]">
          turning <span class="text-brand">ideas</span> into interfaces
        </h2>
        <p class="mt-3 max-w-[36rem] text-[0.95rem] leading-[1.45] lg:mt-[0.9rem]">
          I design and develop creative digital experiences that help people understand your value, trust your work,
          and convert.
        </p>
      </div>

      <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-[1.4rem]">
        <li
          v-for="(service, i) in services"
          :key="service.title"
          v-reveal
          :style="{ transitionDelay: `${i * 80}ms` }"
          class="flex flex-col rounded-[0.9rem] border border-[#d9d9d9] bg-white px-6 pb-7 pt-6 text-center lg:px-[1.45rem] lg:pb-[1.8rem] lg:pt-[1.3rem]"
        >
          <h3 class="text-[1.9rem] font-bold leading-[1.3] text-brand lg:text-[1.938rem]"><span v-for="line in service.lines" :key="line" class="block">{{ line }}</span>
          </h3>
          <p class="mt-5 text-sm font-bold leading-[1.5] lg:mt-[1.25rem] lg:text-[0.63rem] lg:leading-[1.5]">
            {{ service.tagline }}
          </p>
          <p class="mt-5 text-justify text-[0.8rem] leading-[1.55] lg:mt-[1.4rem] lg:text-[0.64rem] lg:leading-[1.4]">
            {{ service.text }}
          </p>
          <div class="mt-auto pt-6 lg:pt-[1.1rem]">
            <span
              class="block whitespace-nowrap rounded-md bg-ink px-1 py-2.5 text-[0.62rem] uppercase leading-none text-white lg:py-[0.55rem] lg:text-[0.55rem]"
            >
              {{ service.pill }}
            </span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
