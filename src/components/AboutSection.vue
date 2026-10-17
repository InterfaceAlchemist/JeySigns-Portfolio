<script setup>
import SectionLabel from "./ui/SectionLabel.vue";
import AppIcon from "./ui/AppIcon.vue";
import { about } from "../data/about";
import { site } from "../data/site";
import { asset } from "../utils";
</script>

<template>
  <section
    id="about"
    class="bg-ink pb-10 pt-14 text-white lg:pb-[2.2rem] lg:pt-[2.9rem]"
  >
    <div class="wrap">
      <div v-reveal>
        <SectionLabel number="03" label="More about me" />
        <h2
          class="mt-6 text-[2.7rem] font-bold leading-[1.1] sm:text-[4.5rem] lg:mt-[1.8rem] lg:text-[6.298rem] lg:leading-[1.12]"
        >
          <span class="block text-brand">tools</span>
          <span class="block">i handle it.</span>
        </h2>
        <p
          class="mt-8 text-[0.85rem] leading-[1.55] sm:text-sm lg:mt-[2.2rem] lg:text-[0.833rem] lg:leading-[1.38]"
        >
          {{ about.intro }}
        </p>
      </div>

      <div
        class="mt-10 grid gap-10 lg:mt-[2.6rem] lg:grid-cols-[644fr_540fr] lg:gap-0"
      >
        <div v-reveal>
          <h3 class="text-lg font-bold lg:text-[1.24rem]">Skills</h3>
          <ul
            class="mt-4 text-base font-medium uppercase leading-[1.45] sm:text-lg lg:mt-[1.05rem] lg:text-[1.269rem] lg:leading-[1.43]"
          >
            <li v-for="skill in about.skills" :key="skill">{{ skill }}</li>
          </ul>
        </div>

        <div v-reveal>
          <h3 class="text-lg font-bold lg:text-[1.24rem]">Education</h3>
          <div class="mt-4 lg:mt-[1.05rem]">
            <p
              class="text-base font-medium uppercase sm:text-lg lg:text-[1.269rem]"
            >
              {{ about.education.school }}
            </p>
            <p class="mt-3 text-sm font-bold lg:mt-[0.9rem] lg:text-[0.969rem]">
              {{ about.education.years }} (<span class="font-normal italic">{{
                about.education.honor
              }}</span
              >)
            </p>
            <p
              class="mt-3 text-sm font-bold lg:mt-[0.95rem] lg:text-[0.959rem]"
            >
              {{ about.education.degree }}
            </p>
          </div>
        </div>
      </div>

      <a
        :href="asset(site.cv)"
        download
        class="relative z-10 mt-12 inline-block transition hover:opacity-80 lg:mt-[7.6rem]"
      >
        <img
          :src="asset('images/misc/cv-button.png')"
          alt="Download CV"
          width="740"
          height="304"
          class="w-44 lg:w-[11.3rem]"
        />
      </a>
    </div>
  </section>
</template>
