<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { asset } from "../utils";

const links = [
  { id: "works", label: "Web Dev & Design", short: "Web" },
  { id: "graphic-design", label: "Graphic Design", short: "Graphic" },
  { id: "logo-gallery", label: "Logo Gallery", short: "Logos" },
  { id: "about", label: "About", short: "About" },
  { id: "contact", label: "Contact", short: "Contact" },
];

const belongsTo = { "shirt-design": "graphic-design", experience: "about" };
const watched = [
  "works",
  "graphic-design",
  "shirt-design",
  "logo-gallery",
  "about",
  "experience",
  "contact",
];

const visible = ref(false);
const active = ref("");
const mask = `url(${asset("images/misc/logo-j.png")})`;
let io = null;

// Show the bar once the visitor scrolls past most of the hero
const onScroll = () => {
  visible.value = window.scrollY > window.innerHeight * 0.6;
};

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Highlight the section that crosses the middle of the screen
  io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting)
          active.value = belongsTo[e.target.id] ?? e.target.id;
      }),
    { rootMargin: "-45% 0px -50% 0px" },
  );
  watched.forEach((id) => {
    const el = document.getElementById(id);
    if (el) io.observe(el);
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  io?.disconnect();
});
</script>

<template>
  <nav
    aria-label="Main"
    class="fixed inset-x-0 top-0 z-50 transition-transform duration-300"
    :class="visible ? 'translate-y-0' : '-translate-y-full'"
  >
    <div
      class="mx-auto flex h-12 w-[calc(100%-1.5rem)] max-w-[74rem] items-center justify-between rounded-b-xl border border-t-0 border-white/10 bg-ink/90 px-4 text-white backdrop-blur sm:px-6"
    >
      <a href="#home" aria-label="Back to top">
        <span
          class="block h-5 w-[0.8rem] bg-white transition hover:bg-brand"
          :style="{
            WebkitMaskImage: mask,
            maskImage: mask,
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
          }"
        ></span>
      </a>

      <ul
        class="flex items-center gap-4 text-[0.68rem] font-bold uppercase tracking-wide sm:gap-8 sm:text-xs"
      >
        <li v-for="link in links" :key="link.id">
          <a
            :href="`#${link.id}`"
            class="transition hover:text-brand"
            :class="active === link.id ? 'text-brand' : ''"
          >
            <span class="sm:hidden">{{ link.short }}</span>
            <span class="hidden sm:inline">{{ link.label }}</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>

  <!-- Back to top -->
  <a
    href="#home"
    aria-label="Back to top"
    class="fixed bottom-4 left-4 z-50 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-ink/95 text-white shadow-xl backdrop-blur transition duration-300 hover:bg-brand sm:bottom-6 sm:left-6"
    :class="
      visible
        ? 'translate-y-0 opacity-100'
        : 'pointer-events-none translate-y-4 opacity-0'
    "
  >
    <svg
      viewBox="0 0 24 24"
      class="h-5 w-5"
      fill="none"
      stroke="currentColor"
      stroke-width="2.4"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  </a>
</template>
