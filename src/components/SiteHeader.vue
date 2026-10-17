<script setup>
import { asset } from '../utils'
</script>

<template>
  <header class="flex items-center justify-between px-5 pt-5 sm:px-10 sm:pt-8 lg:px-[5.5%] lg:pt-[2.2rem]">
    <a href="#home" aria-label="JeySigns — back to top">
      <img
        :src="asset('images/misc/logo-full.png')"
        alt="JeySigns"
        width="537"
        height="101"
        class="h-5 w-auto sm:h-6 lg:h-[1.65rem]"
      />
    </a>
    <p
      class="flex items-center gap-2 text-[0.6rem] font-bold uppercase sm:text-xs lg:gap-[0.85rem] lg:text-[1.24rem]"
    >
      <span
        class="h-2 w-2 rounded-full bg-live shadow-[0_0_0.6rem_#00ff04] motion-safe:animate-pulse lg:h-3 lg:w-3"
        aria-hidden="true"
      ></span>
      Available for projects
    </p>
  </header>
</template>
