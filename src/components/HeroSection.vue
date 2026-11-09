<script setup>
import SiteHeader from "./SiteHeader.vue";
import { asset } from "../utils";
import { site } from "../data/site";
</script>

<template>
  <!-- Desktop (lg+): a 16:9 stage with absolutely-placed elements (matches the Figma frame).
       Phones / tablets: portrait on top, then a centred, stacked text block underneath. -->
  <section
    id="home"
    class="relative isolate overflow-hidden bg-white lg:aspect-video"
  >
    <SiteHeader class="absolute inset-x-0 top-0 z-30" />

    <!-- Stage: giant PORTFOLIO word + portrait -->
    <div
      class="relative aspect-[4/4.8] overflow-hidden sm:aspect-[4/3.7] lg:absolute lg:inset-0 lg:aspect-auto lg:overflow-visible"
    >
      <img
        :src="asset('images/hero/portfolio-text.webp')"
        alt=""
        aria-hidden="true"
        width="2800"
        height="626"
        class="absolute left-1/2 top-[12%] z-0 w-[135%] max-w-none -translate-x-1/2 select-none sm:top-[14%] sm:w-[120%] lg:left-0 lg:top-[21%] lg:w-full lg:translate-x-0"
      />
      <img
        :src="asset('images/hero/portrait-hero.webp')"
        :alt="`Portrait of ${site.name}`"
        width="1700"
        height="1762"
        fetchpriority="high"
        class="absolute left-1/2 top-[6%] z-10 w-[135%] max-w-none -translate-x-1/2 sm:bottom-0 sm:top-auto sm:w-[64%] lg:w-[54.6%]"
      />
      <div
        class="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-white via-white/70 to-transparent lg:hidden"
      ></div>
    </div>

    <!-- Text layer -->
    <div
      class="relative z-20 -mt-14 px-6 pb-12 text-center sm:px-10 lg:static lg:m-0 lg:p-0 lg:text-left"
    >
      <div class="lg:absolute lg:left-[5.5%] lg:top-[58.5%]">
        <p
          class="font-script text-[clamp(2.4rem,12.5vw,3.8rem)] font-semibold leading-none text-brand lg:text-[3.75rem]"
        >
          Hey, I’m
        </p>
        <h1
          class="-mx-4 whitespace-nowrap font-script text-[clamp(2.6rem,15.4vw,4.6rem)] font-semibold leading-[1.1] sm:mx-0 lg:mt-[0.5rem] lg:text-[3.35rem]"
        >
          {{ site.name }}
        </h1>
        <p
          class="mt-2 text-[clamp(0.9rem,4.2vw,1.15rem)] font-bold lg:mt-[0.9rem] lg:text-[1.2rem]"
        >
          creativity <span class="text-brand">meets</span> solution
        </p>
      </div>

      <img
        :src="asset('images/hero/creative-tag.png')"
        alt="Creative Developer & Designer"
        width="1834"
        height="308"
        class="mx-auto mt-6 block w-[min(19rem,82%)] lg:absolute lg:left-[5.3%] lg:top-[86.1%] lg:z-20 lg:mx-0 lg:mt-0 lg:w-[29rem]"
      />

      <p
        class="mt-8 text-[0.7rem] font-bold leading-[1.7] tracking-wide sm:text-sm lg:absolute lg:bottom-[5.6%] lg:right-[5.2%] lg:mt-0 lg:text-right lg:text-[1.027rem] lg:tracking-normal"
      >
        <span class="uppercase">Built in the Philippines,</span><br />
        <span class="uppercase lg:normal-case">design for the world.</span>
      </p>

      <!-- Phones only: a gentle nudge to keep scrolling -->
      <a
        href="#services"
        class="mt-8 flex flex-col items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.3em] text-brand lg:hidden"
      >
        Scroll for more
        <span
          class="text-lg leading-none motion-safe:animate-bounce"
          aria-hidden="true"
          >↓</span
        >
      </a>
    </div>
  </section>
</template>
