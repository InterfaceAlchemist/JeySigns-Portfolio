<script setup>
import AppIcon from "./AppIcon.vue";
</script>

<template>
  <!-- Hover: slight dark blur + eye icon (parent needs class "group relative") -->
  <span
    class="pointer-events-none absolute inset-0 grid place-items-center bg-black/45 opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
  >
    <span
      class="grid h-11 w-11 scale-90 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/50 transition duration-300 group-hover:scale-100"
    >
      <AppIcon name="eye" class="h-5 w-5" />
    </span>
  </span>

  <!-- Phones and tablets have no hover, so show a small eye badge instead -->
  <span
    class="pointer-events-none absolute bottom-1.5 right-1.5 grid h-7 w-7 place-items-center rounded-full bg-black/55 text-white [@media(hover:hover)]:hidden"
  >
    <AppIcon name="eye" class="h-4 w-4" />
  </span>
</template>
