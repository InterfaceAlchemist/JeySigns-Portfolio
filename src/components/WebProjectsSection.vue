<script setup>
import SectionLabel from './ui/SectionLabel.vue'
import MetaItem from './ui/MetaItem.vue'
import ProjectCard from './ProjectCard.vue'
import { projects } from '../data/projects'
</script>

<template>
  <section id="works" class="bg-ink pb-14 pt-12 text-white lg:pb-[3rem] lg:pt-[4rem]">
    <div class="wrap">
      <div v-reveal>
        <div class="flex items-baseline justify-between gap-4">
          <SectionLabel number="02" label="My recent works" />
          <p class="hidden text-right font-bold sm:block sm:text-lg lg:text-[1.386rem]">Web Development &amp; Design</p>
        </div>

        <div class="mt-5 flex flex-wrap items-end justify-between gap-x-6 gap-y-2 lg:mt-[2.6rem]">
          <h2 class="text-[1.7rem] font-bold leading-[1.2] sm:text-[2.2rem] lg:text-[2.083rem]">
            <span class="text-brand">where</span> clean code <span class="text-brand">meets</span> clean design
          </h2>
          <MetaItem label="Year" value="2023-2026" />
        </div>
      </div>

      <div class="mt-8 grid grid-cols-1 gap-5 lg:mt-[2.3rem] lg:grid-cols-2 lg:gap-x-[2.8rem] lg:gap-y-[3rem]">
        <div v-for="project in projects" :key="project.title" v-reveal class="flex min-w-0">
          <ProjectCard :project="project" class="w-full" />
        </div>
      </div>
    </div>
  </section>
</template>
