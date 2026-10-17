<script setup>
import { asset } from '../../utils'

// Orange scrolling band: "Web Development & Design ᒍ Web Development & Design ᒍ …"
defineProps({
  text: { type: String, required: true },
  count: { type: Number, default: 12 },
})
</script>

<template>
  <div class="overflow-hidden bg-brand text-ink select-none" aria-hidden="true">
    <div class="flex h-[3.4rem] w-max animate-marquee items-center motion-reduce:animate-none lg:h-[4.4rem]">
      <div v-for="half in 2" :key="half" class="flex shrink-0 items-center">
        <template v-for="n in count" :key="n">
          <span class="whitespace-nowrap font-zetta text-[0.95rem] font-bold lg:text-[0.86rem]">{{ text }}</span>
          <img
            :src="asset('images/misc/logo-j.png')"
            alt=""
            width="65"
            height="101"
            class="mx-6 h-3 w-auto lg:mx-[2.15rem] lg:h-[0.85rem]"
          />
        </template>
      </div>
    </div>
  </div>
</template>
