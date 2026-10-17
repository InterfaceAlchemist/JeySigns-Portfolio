<script setup>
import { experience } from '../data/about'
</script>

<template>
  <section id="experience" class="bg-ink pb-14 text-white lg:pb-[2.95rem]">
    <div class="wrap">
      <!-- On desktop this heading sits on the same row as the "Download CV" button above -->
      <h2
        v-reveal
        class="text-right text-[2.7rem] font-bold leading-[1.12] sm:text-[4.5rem] lg:-mt-[5.5rem] lg:text-[6.298rem] lg:leading-[1.12]"
      >
        <span class="block text-brand">where</span>
        <span class="block">i’ve worked.</span>
      </h2>

      <ul class="mt-10 grid gap-x-0 gap-y-10 lg:mt-[4.6rem] lg:grid-cols-[644fr_540fr] lg:gap-y-[2.9rem]">
        <li v-for="job in experience" :key="job.company" v-reveal class="lg:max-w-[34.5rem]">
          <h3 class="text-lg font-bold sm:text-xl lg:text-[1.163rem] lg:leading-[1.3]">{{ job.company }}</h3>
          <p class="mt-1 text-sm sm:text-base lg:mt-[0.25rem] lg:text-[1.027rem]">{{ job.role }}</p>
          <p class="mt-4 text-[0.82rem] leading-[1.6] lg:mt-[1.1rem] lg:text-[0.775rem] lg:leading-[1.38]">{{ job.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
