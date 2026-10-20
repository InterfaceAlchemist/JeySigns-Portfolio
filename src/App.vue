<script setup>
import { ref } from "vue";
import FlashScreen from "./components/FlashScreen.vue";
import HeroSection from "./components/HeroSection.vue";
import ServicesSection from "./components/ServicesSection.vue";
import MarqueeBand from "./components/ui/MarqueeBand.vue";
import WebProjectsSection from "./components/WebProjectsSection.vue";
import GraphicDesignSection from "./components/GraphicDesignSection.vue";
import ShirtDesignSection from "./components/ShirtDesignSection.vue";
import LogoGallerySection from "./components/LogoGallerySection.vue";
import AboutSection from "./components/AboutSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import ContactSection from "./components/ContactSection.vue";
import SoundGate from "./components/SoundGate.vue";
import MusicPlayer from "./components/MusicPlayer.vue";

const stage = ref("gate");

const onFlashDone = () => {
  if (stage.value === "gate") document.body.classList.add("is-locked");
};
</script>

<template>
  <FlashScreen @done="onFlashDone" />
  <SoundGate v-if="stage === 'gate'" @enter="stage = 'site'" />
  <MusicPlayer v-if="stage === 'site'" />

  <main>
    <HeroSection />
    <ServicesSection />
    <MarqueeBand text="Web Development & Design" />
    <WebProjectsSection />
    <GraphicDesignSection />
    <ShirtDesignSection />
    <LogoGallerySection />
    <AboutSection />
    <ExperienceSection />
    <ContactSection />
  </main>
</template>
