<script setup>
import ShirtShowcase from './ShirtShowcase.vue'
import { shirts } from '../data/shirts'
</script>

<template>
  <div id="shirt-design">
    <ShirtShowcase v-for="design in shirts" :key="design.number" :design="design" />
  </div>
</template>
