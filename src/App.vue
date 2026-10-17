<script setup>
import { ref } from 'vue'
import FlashScreen from './components/FlashScreen.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import MarqueeBand from './components/ui/MarqueeBand.vue'
import WebProjectsSection from './components/WebProjectsSection.vue'
import GraphicDesignSection from './components/GraphicDesignSection.vue'
import ShirtDesignSection from './components/ShirtDesignSection.vue'
import LogoGallerySection from './components/LogoGallerySection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection from './components/ContactSection.vue'

const ready = ref(false)
</script>

<template>
  <FlashScreen @done="ready = true" />

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
