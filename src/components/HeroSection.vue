<script setup>
import SiteHeader from "./SiteHeader.vue";
import { asset } from "../utils";
import { site } from "../data/site";
</script>

<template>
  <!-- Desktop: a 16:9 stage with absolutely-placed elements (matches the Figma frame).
       Mobile / tablet: stage on top, text stacked underneath. -->
  <section
    id="home"
    class="relative isolate overflow-hidden bg-white lg:aspect-video"
  >
    <SiteHeader class="absolute inset-x-0 top-0 z-30" />

    <!-- Stage: giant PORTFOLIO word + portrait -->
    <div
      class="relative aspect-[4/4.7] sm:aspect-[4/3.7] lg:absolute lg:inset-0 lg:aspect-auto"
    >
      <img
        :src="asset('images/hero/portfolio-text.webp')"
        alt=""
        aria-hidden="true"
        width="2800"
        height="626"
        class="absolute left-1/2 top-[17%] z-0 w-[135%] max-w-none -translate-x-1/2 select-none sm:top-[14%] sm:w-[120%] lg:left-0 lg:top-[21%] lg:w-full lg:translate-x-0"
      />
      <img
        :src="asset('images/hero/portrait-hero.webp')"
        :alt="`Portrait of ${site.name}`"
        width="1700"
        height="1762"
        fetchpriority="high"
        class="absolute bottom-0 left-1/2 z-10 w-[88%] max-w-none -translate-x-1/2 sm:w-[64%] lg:w-[54.6%]"
      />
      <div
        class="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-white to-transparent lg:hidden"
      ></div>
    </div>

    <!-- Text layer -->
    <div
      class="relative z-20 -mt-8 px-6 pb-12 sm:px-10 lg:static lg:m-0 lg:p-0"
    >
      <div class="lg:absolute lg:left-[5.5%] lg:top-[58.5%]">
        <p
          class="font-script text-[3.1rem] font-semibold leading-none text-brand lg:text-[3.75rem]"
        >
          Hey, I’m
        </p>
        <h1
          class="font-script text-[2.7rem] font-semibold leading-[1.1] lg:mt-[0.5rem] lg:text-[3.35rem]"
        >
          {{ site.name }}
        </h1>

        <!-- new tagline -->
        <p
          class="mt=2 text-base font-bold sm:text-lg lg:mt-[0.9rem] lg:text-[1.2rem]"
        >
          creativity <span class="text-brand">meets</span> solution
        </p>
      </div>

      <img
        :src="asset('images/hero/creative-tag.png')"
        alt="Creative Developer & Designer"
        width="1834"
        height="308"
        class="mt-5 w-[18rem] sm:w-[24rem] lg:absolute lg:left-[5.3%] lg:top-[86.1%] lg:z-20 lg:mt-0 lg:w-[29rem]"
      />

      <p
        class="mt-8 text-right text-xs font-bold leading-[1.65] sm:text-sm lg:absolute lg:bottom-[5.6%] lg:right-[5.2%] lg:mt-0 lg:text-[1.027rem]"
      >
        BUILT IN THE PHILIPPINES,<br />design for the world.
      </p>
    </div>
  </section>
</template>
