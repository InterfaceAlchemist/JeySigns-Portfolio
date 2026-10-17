<script setup>
import MarqueeBand from './ui/MarqueeBand.vue'
import SocialShowcase from './SocialShowcase.vue'
import PosterGallery from './PosterGallery.vue'
import { argus, sugarCafe } from '../data/graphic'
</script>

<template>
  <div id="graphic-design">
    <MarqueeBand text="Graphic Design" />

    <!-- White: social media posts -->
    <section class="bg-white pb-12 pt-10 lg:pb-[3.2rem] lg:pt-[3rem]">
      <SocialShowcase :data="argus" />
      <div class="h-14 lg:h-[5.3rem]"></div>
      <SocialShowcase :data="sugarCafe" />
    </section>

    <!-- Dark: posters -->
    <PosterGallery />
  </div>
</template>
