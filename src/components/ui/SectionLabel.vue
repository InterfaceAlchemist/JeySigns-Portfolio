<script setup>
// "01 / WHAT I CREATE" — orange number + italic uppercase label
defineProps({ number: String, label: String })
</script>

<template>
  <p class="text-[1.05rem] font-bold uppercase leading-[1.7] lg:text-[1.386rem]">
    <span class="text-brand">{{ number }}</span>
    <span class="italic"> / {{ label }}</span>
  </p>
</template>
