<script setup>
// "Industry\Coffee Shop" — label, backslash, bold italic value
defineProps({ label: String, value: String })
</script>

<template>
  <p class="text-[0.8rem] sm:text-sm lg:text-[0.901rem]">{{ label }}\<b class="font-bold italic">{{ value }}</b></p>
</template>
