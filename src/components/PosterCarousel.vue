<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import AppIcon from "./ui/AppIcon.vue";
import MetaItem from "./ui/MetaItem.vue";
import PosterLightbox from "./PosterLightbox.vue";
import { asset } from "../utils";
import { posters } from "../data/graphic";

// How much page scrolling each poster takes, in screen heights. Smaller = flips faster.
const SCROLL_PER_POSTER = 0.34;

// Big title shown for each poster. Edit freely — the key is the image file name without ".webp".
// (If you add a `title` to a poster in data/graphic.js, that wins over this list.)
const TITLES = {
  "poster-himeno": "Himeno",
  "poster-bakugou": "Bakugou",
  "poster-momo-ayase": "Momo Ayase",
  "poster-gojo": "Satoru Gojo",
  "poster-kirara-hoshi": "Kirara Hoshi",
  "poster-pitou": "Neferpitou",
  "poster-shibuya": "Shibuya Y2K",
  "poster-vice-city": "Karina GTA",
  "poster-slam-dunk": "Yujin SlamDunk",
  "poster-liyo": "Liyo Film",
  "poster-infographics": "Infographics",
  "poster-el-fili": "El Fili Film",
  "poster-no-stress": "No Stress",
  "poster-just-be-yourself": "Just Be Yourself",
  "poster-congrats": "Contest Winner",
  "poster-looking-for": "PMC VECTORS",
  "poster-mspmc-1": "Ms. PMC 2026",
  "poster-hoh-tarpaulin": "Hands Of Hope",
  "poster-mspmc-2": "Ms. PMC 2026 II",
  "poster-handa-ka-na-bang": "BAK2SKUL",
  "poster-cum-laude": "Graduation",
};
const stem = (path) =>
  path
    .split("/")
    .pop()
    .replace(/\.\w+$/, "");

// Every poster that has an image (the "coming soon" placeholder is skipped).
const items = computed(() =>
  posters.rows
    .flat()
    .filter((p) => p.image)
    .map((p) => ({
      ...p,
      title:
        p.title || TITLES[stem(p.image)] || p.alt.replace(/\s+poster$/i, ""),
    })),
);
const total = computed(() => items.value.length);
const year = posters.meta.find((m) => m.label === "Year");
const types = posters.meta.find((m) => m.label === "Types");

const wrapEl = ref(null);
const stageEl = ref(null);
const size = ref({ w: 280, h: 380, r: 500, step: 40, persp: 1100, sw: 1000 });
const pos = ref(0); // the position being drawn (eases towards `target`)
let target = 0; // the position the scroll asks for
const lightbox = ref(-1);

const active = computed(() =>
  Math.min(total.value - 1, Math.max(0, Math.round(pos.value))),
);

const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

// ---- sizing -------------------------------------------------------------
const measure = () => {
  const st = stageEl.value;
  if (!st) return;
  const phone = st.clientWidth < 640;
  const ratio = phone ? 0.68 : 0.74; // card width ÷ height
  let h = Math.min(st.clientHeight * 0.76, 780);
  let w = h * ratio;
  const maxW = st.clientWidth * (phone ? 0.72 : 0.3);
  if (w > maxW) {
    w = maxW;
    h = w / ratio;
  }
  // The posters sit on a ring (a cylinder) that rotates around its vertical axis.
  size.value = {
    w,
    h,
    r: w * (phone ? 1.7 : 1.8), // ring radius
    step: phone ? 34 : 40, // degrees between neighbouring posters
    persp: phone ? 900 : 1100, // camera distance: smaller = stronger 3D
    sw: st.clientWidth,
  };
};

// ---- scroll → position --------------------------------------------------
const scrollSpan = () =>
  wrapEl.value ? wrapEl.value.offsetHeight - window.innerHeight : 0;

const readScroll = () => {
  const el = wrapEl.value;
  if (!el) return;
  const span = scrollSpan();
  const p =
    span > 0
      ? Math.min(1, Math.max(0, -el.getBoundingClientRect().top / span))
      : 0;
  target = p * (total.value - 1);
};

let raf = 0;
const tick = () => {
  const diff = target - pos.value;
  if (Math.abs(diff) > 0.0005)
    pos.value = reduceMotion ? target : pos.value + diff * 0.12;
  else if (diff !== 0) pos.value = target;
  raf = requestAnimationFrame(tick);
};

const goTo = (i) => {
  const el = wrapEl.value;
  if (!el) return;
  const clamped = Math.max(0, Math.min(total.value - 1, i));
  const top = el.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({
    top: top + (clamped / (total.value - 1)) * scrollSpan(),
    behavior: reduceMotion ? "auto" : "smooth",
  });
};

// ---- cards (on a rotating ring) ------------------------------------------
const phiOf = (i) => (i - pos.value) * size.value.step; // angle of poster i on the ring, in degrees
const isShown = (i) =>
  Math.abs(i - pos.value) < 5 && Math.cos((phiOf(i) * Math.PI) / 180) > -0.3;

const ringStyle = computed(() => ({
  transformStyle: "preserve-3d",
  transform: `translateZ(${-size.value.r}px)`, // keeps the front poster at normal size
}));

const cardStyle = (i) => {
  const phi = phiOf(i);
  const facing = Math.max(0, Math.cos((phi * Math.PI) / 180)); // 1 = facing us, 0 = edge-on
  return {
    width: `${size.value.w}px`,
    height: `${size.value.h}px`,
    marginLeft: `${-size.value.w / 2}px`,
    marginTop: `${-size.value.h / 2}px`,
    transform: `rotateY(${phi}deg) translateZ(${size.value.r}px)`,
    backfaceVisibility: "hidden",
    filter: `brightness(${0.3 + 0.7 * facing})`,
  };
};

// ---- big titles ----------------------------------------------------------
// Size each title so it fits the screen (phones may use two lines).
const titleLayout = (text) => {
  const sw = size.value.sw;
  const phone = sw < 640;
  const maxPx = phone ? 50 : sw * 0.07;
  const lines = phone && text.length > 12 ? 2 : 1;
  const perLine = Math.ceil(text.length / lines);
  return Math.min(maxPx, (sw * 0.9) / (perLine * 0.64));
};
// d = how far this poster is from the centre (negative = already passed → goes UP and fades,
// positive = coming up from below)
const titleStyle = (i) => {
  const d = i - pos.value;
  const fs = titleLayout(items.value[i].title);
  return {
    fontSize: `${fs}px`,
    opacity: Math.max(0, 1 - Math.abs(d) * 2.2),
    transform: `translate(-50%, calc(-50% + ${d * fs * 1.3}px))`,
  };
};

const onCard = (i) => (i === active.value ? (lightbox.value = i) : goTo(i));

// ---- keyboard + swipe ---------------------------------------------------
const onKey = (e) => {
  if (lightbox.value >= 0 || !wrapEl.value) return;
  const r = wrapEl.value.getBoundingClientRect();
  if (!(r.top <= 0 && r.bottom >= window.innerHeight * 0.5)) return;
  if (e.key === "ArrowRight") {
    e.preventDefault();
    goTo(active.value + 1);
  } else if (e.key === "ArrowLeft") {
    e.preventDefault();
    goTo(active.value - 1);
  }
};

let touch = null;
const onTouchStart = (e) =>
  (touch = { x: e.touches[0].clientX, y: e.touches[0].clientY });
const onTouchEnd = (e) => {
  if (!touch) return;
  const dx = e.changedTouches[0].clientX - touch.x;
  const dy = e.changedTouches[0].clientY - touch.y;
  touch = null;
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5)
    goTo(active.value + (dx < 0 ? 1 : -1));
};

let ro = null;
const onResize = () => {
  measure();
  readScroll();
};
onMounted(() => {
  measure();
  readScroll();
  pos.value = target;
  window.addEventListener("scroll", readScroll, { passive: true });
  window.addEventListener("resize", onResize);
  window.addEventListener("keydown", onKey);
  ro = new ResizeObserver(measure);
  if (stageEl.value) ro.observe(stageEl.value);
  raf = requestAnimationFrame(tick);
});
onBeforeUnmount(() => {
  cancelAnimationFrame(raf);
  window.removeEventListener("scroll", readScroll);
  window.removeEventListener("resize", onResize);
  window.removeEventListener("keydown", onKey);
  ro?.disconnect();
});
</script>

<template>
  <section
    id="posters"
    aria-roledescription="carousel"
    aria-label="Poster design"
  >
    <!-- Tall wrapper = how long the carousel stays pinned while you scroll -->
    <div
      ref="wrapEl"
      class="relative bg-ink text-white"
      :style="{
        height: `calc(100svh + ${(total - 1) * SCROLL_PER_POSTER * 100}svh)`,
      }"
    >
      <div class="sticky top-0 flex h-[100svh] flex-col overflow-hidden">
        <!-- Top row (extra top space keeps it clear of the sticky nav bar) -->
        <div
          class="wrap grid grid-cols-2 items-baseline gap-y-3 pt-[4.25rem] lg:grid-cols-[1fr_auto_1fr] lg:pt-[4.5rem]"
        >
          <p class="text-sm lg:text-[1.1rem]">Selected Works</p>
          <h3
            class="order-last col-span-2 text-center text-[1.6rem] font-bold uppercase leading-none sm:text-[2rem] lg:order-none lg:col-span-1 lg:text-[2.2rem]"
          >
            Poster Design
          </h3>
          <MetaItem
            v-if="year"
            class="justify-self-end"
            :label="year.label"
            :value="year.value"
          />
        </div>

        <!-- Stage -->
        <div
          ref="stageEl"
          class="relative min-h-0 flex-1"
          :style="{ perspective: `${size.persp}px` }"
          @touchstart.passive="onTouchStart"
          @touchend.passive="onTouchEnd"
        >
          <!-- Posters on the ring -->
          <div class="absolute inset-0" :style="ringStyle">
            <template v-for="(p, i) in items" :key="p.image">
              <button
                v-if="isShown(i)"
                type="button"
                class="group absolute left-1/2 top-1/2 overflow-hidden rounded-[0.7rem] border border-white/15 bg-black/40 shadow-2xl outline-none will-change-transform focus-visible:ring-2 focus-visible:ring-brand"
                :class="i === active ? 'cursor-zoom-in' : 'cursor-pointer'"
                :style="cardStyle(i)"
                :aria-label="
                  i === active
                    ? `View full quality: ${p.title}`
                    : `Go to: ${p.title}`
                "
                :tabindex="i === active ? 0 : -1"
                @click="onCard(i)"
              >
                <img
                  :src="asset(p.image)"
                  :alt="p.alt"
                  draggable="false"
                  decoding="async"
                  class="h-full w-full select-none object-cover"
                />
                <span
                  v-if="i === active"
                  class="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center lg:bottom-5"
                >
                  <span
                    class="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-[0.6rem] font-bold uppercase tracking-wide text-ink lg:text-[0.65rem]"
                  >
                    <AppIcon name="eye" class="h-3.5 w-3.5" /> View full quality
                  </span>
                </span>
              </button>
            </template>
          </div>

          <!-- Big title of the current poster, in front of the ring.
               Scrolling slides it up and fades it out while the next one rises into place. -->
          <div
            class="pointer-events-none absolute inset-0 z-[200]"
            aria-hidden="true"
          >
            <template v-for="(p, i) in items" :key="p.image">
              <p
                v-if="Math.abs(i - pos) < 0.5"
                class="absolute left-1/2 top-1/2 w-[92%] text-balance text-center font-bold uppercase leading-[1.02] text-white [text-shadow:0_4px_32px_rgba(0,0,0,0.45)]"
                :style="titleStyle(i)"
              >
                {{ p.title }}
              </p>
            </template>
          </div>
        </div>

        <!-- Controls -->
        <div
          class="flex items-center justify-center gap-3 py-3 lg:gap-4 lg:py-[1rem]"
        >
          <button
            type="button"
            aria-label="Previous poster"
            class="grid h-10 w-[4.2rem] place-items-center rounded-full bg-brand/25 text-white transition hover:bg-brand disabled:opacity-30 disabled:hover:bg-brand/25"
            :disabled="active === 0"
            @click="goTo(active - 1)"
          >
            <AppIcon name="chevron-left" class="h-5 w-5" />
          </button>
          <p
            class="min-w-[4.5rem] text-center text-xs tabular-nums text-white/70"
          >
            {{ String(active + 1).padStart(2, "0") }} /
            {{ String(total).padStart(2, "0") }}
          </p>
          <button
            type="button"
            aria-label="Next poster"
            class="grid h-10 w-[4.2rem] place-items-center rounded-full bg-brand text-white transition hover:brightness-110 disabled:opacity-30"
            :disabled="active === total - 1"
            @click="goTo(active + 1)"
          >
            <AppIcon name="chevron-right" class="h-5 w-5" />
          </button>
        </div>

        <!-- Bottom row -->
        <div class="wrap pb-6 text-center lg:pb-[1.6rem]">
          <MetaItem v-if="types" :label="types.label" :value="types.value" />
        </div>

        <p class="sr-only" aria-live="polite">{{ items[active].title }}</p>
      </div>
    </div>

    <PosterLightbox
      :items="items"
      :index="lightbox"
      @close="lightbox = -1"
      @change="lightbox = $event"
    />
  </section>
</template>
