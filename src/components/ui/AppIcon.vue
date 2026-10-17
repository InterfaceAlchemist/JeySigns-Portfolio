<script setup>
// Small inline SVG icon set (no icon-font dependency).
defineProps({ name: { type: String, required: true } });
</script>

<template>
  <svg
    v-if="name === 'github'"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-1.96c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"
    />
  </svg>
  <svg
    v-else-if="name === 'external'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M10 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-4" />
    <path d="M14 4h6v6M20 4l-9 9" />
  </svg>
  <svg
    v-else-if="name === 'case'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
  </svg>
  <svg
    v-else-if="name === 'download'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2.2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M12 3v12M7 10.5l5 5 5-5M4 20h16" />
  </svg>
  <svg
    v-else-if="name === 'mail'"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      d="M2 5.5v13h3.6V10.2L12 15l6.4-4.8v8.3H22v-13l-1.9-1.4L12 9.3 3.9 4.1z"
    />
  </svg>
  <svg
    v-else-if="name === 'phone'"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fill-rule="evenodd"
      d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4 15.2a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z"
    />
  </svg>
  <svg
    v-else-if="name === 'facebook'"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      d="M24 12.07C24 5.44 18.63.07 12 .07S0 5.44 0 12.07c0 5.99 4.39 10.95 10.13 11.85v-8.39H7.08v-3.47h3.05V9.43c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.23 2.69.23v2.95h-1.52c-1.49 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.47h-2.8v8.39C19.61 23.03 24 18.06 24 12.07z"
    />
  </svg>
  <svg v-else-if="name === 'instagram'" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="1.5" y="1.5" width="21" height="21" rx="6.5" fill="currentColor" />
    <circle
      cx="12"
      cy="12"
      r="4.6"
      fill="none"
      stroke="#fff"
      stroke-width="2.1"
    />
    <circle cx="17.7" cy="6.3" r="1.35" fill="#fff" />
  </svg>
  <!-- Instagram-style UI icons -->
  <svg
    v-else-if="name === 'heart' || name === 'heart-fill'"
    viewBox="0 0 24 24"
    :fill="name === 'heart-fill' ? 'currentColor' : 'none'"
    stroke="currentColor"
    stroke-width="2"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path
      d="M12 21s-7.8-4.7-9.7-9.6C.9 7.8 3.2 4.6 6.4 4.6c2 0 3.5 1 5.6 3.1 2.1-2.1 3.6-3.1 5.6-3.1 3.2 0 5.5 3.2 4.1 6.8C19.8 16.3 12 21 12 21z"
    />
  </svg>
  <svg
    v-else-if="name === 'comment'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M20.66 17.01a9.99 9.99 0 1 0-3.59 3.62L22 22z" />
  </svg>
  <svg
    v-else-if="name === 'share'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <line x1="22" y1="3" x2="9.22" y2="10.08" />
    <polygon points="11.7 20.33 22 3 2 3 9.22 10.08 11.7 20.33" />
  </svg>
  <svg
    v-else-if="name === 'bookmark' || name === 'bookmark-fill'"
    viewBox="0 0 24 24"
    :fill="name === 'bookmark-fill' ? 'currentColor' : 'none'"
    stroke="currentColor"
    stroke-width="2"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M5 3h14v18l-7-5-7 5z" />
  </svg>
  <svg
    v-else-if="name === 'menu'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2.4"
    stroke-linecap="round"
    aria-hidden="true"
  >
    <path d="M2 5h20M8 12h14M13 19h9" />
  </svg>
  <svg
    v-else-if="name === 'eye'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
  <svg
    v-else-if="name === 'close'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2.2"
    stroke-linecap="round"
    aria-hidden="true"
  >
    <path d="M5 5l14 14M19 5L5 19" />
  </svg>
  <svg
    v-else-if="name === 'chevron-left' || name === 'chevron-right'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2.2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path :d="name === 'chevron-left' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'" />
  </svg>
</template>
