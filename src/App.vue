<script setup>
import { ref } from "vue";
import FlashScreen from "./components/FlashScreen.vue";
import SoundGate from "./components/SoundGate.vue";
import MusicPlayer from "./components/MusicPlayer.vue";
import SiteNav from "./components/SiteNav.vue";
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

// Storage can throw in private mode, so wrap it
const read = (store, key) => {
  try {
    return store.getItem(key);
  } catch {
    return null;
  }
};
const write = (store, key, value) => {
  try {
    store.setItem(key, value);
  } catch {
    /* ignore */
  }
};

const showFlash = ref(read(sessionStorage, "flash-seen") !== "1");
const skipGate =
  read(sessionStorage, "entered") === "1" ||
  read(localStorage, "sound") === "off";
const stage = ref(skipGate ? "site" : "gate"); // 'gate' → 'site'

const onFlashDone = () => {
  write(sessionStorage, "flash-seen", "1");
  // FlashScreen unlocks scrolling when it finishes, so lock again while the gate is open
  if (stage.value === "gate") document.body.classList.add("is-locked");
};

const onEnter = (withSound) => {
  write(sessionStorage, "entered", "1");
  write(localStorage, "sound", withSound ? "on" : "off");
  stage.value = "site";
};
</script>

<template>
  <FlashScreen v-if="showFlash" @done="onFlashDone" />
  <SoundGate v-if="stage === 'gate'" @enter="onEnter" />
  <MusicPlayer v-if="stage === 'site'" />
  <SiteNav v-if="stage === 'site'" />

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
