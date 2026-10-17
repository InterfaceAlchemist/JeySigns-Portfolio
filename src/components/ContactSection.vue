<script setup>
import { computed } from "vue";
import AppIcon from "./ui/AppIcon.vue";
import SiteFooter from "./SiteFooter.vue";
import { asset } from "../utils";
import { site } from "../data/site";

const rows = computed(() => [
  { icon: "mail", label: site.contact.email, href: site.contact.links.email },
  { icon: "phone", label: site.contact.phone, href: site.contact.links.phone },
  {
    icon: "facebook",
    label: site.contact.facebook,
    href: site.contact.links.facebook,
  },
  {
    icon: "instagram",
    label: site.contact.instagram,
    href: site.contact.links.instagram,
  },
]);
</script>

<template>
  <section
    id="contact"
    class="relative overflow-hidden bg-white pt-14 lg:min-h-[51.25rem] lg:pt-[5.75rem]"
  >
    <div class="wrap relative z-10">
      <div v-reveal>
        <h2
          class="text-[3.2rem] font-bold leading-none text-brand sm:text-[4.5rem] lg:text-[4.845rem]"
        >
          what’s next?
        </h2>
        <p
          class="mt-3 max-w-[43rem] text-xl font-bold leading-[1.33] sm:text-2xl lg:mt-[0.7rem] lg:text-[1.55rem]"
        >
          Take the next step and let’s create something extraordinary together.
        </p>

        <p
          class="mt-8 text-lg font-bold sm:text-xl lg:mt-[2.55rem] lg:text-[1.55rem] lg:leading-[1.33]"
        >
          contact or reach out via any platform:
        </p>
        <ul class="mt-4 space-y-4 lg:mt-[1.1rem] lg:space-y-[1.05rem]">
          <li
            v-for="row in rows"
            :key="row.icon"
            class="flex items-center gap-3 lg:gap-[0.9rem]"
          >
            <AppIcon
              :name="row.icon"
              class="h-5 w-5 shrink-0 text-brand lg:h-[1.5rem] lg:w-[1.5rem]"
            />
            <component
              :is="row.href ? 'a' : 'span'"
              :href="row.href || undefined"
              :target="
                row.href && row.href.startsWith('http') ? '_blank' : undefined
              "
              rel="noopener"
              class="break-all text-[0.95rem] sm:text-xl lg:text-[1.55rem] lg:leading-[1.33]"
              :class="
                row.href
                  ? 'underline-offset-4 transition hover:text-brand hover:underline'
                  : ''
              "
            >
              {{ row.label }}
            </component>
          </li>
        </ul>
      </div>

      <SiteFooter class="mt-12 lg:mt-[6.5rem] lg:pb-[7rem]" />
    </div>

    <img
      :src="asset('images/hero/portrait-contact.webp')"
      alt=""
      aria-hidden="true"
      width="1700"
      height="1737"
      loading="lazy"
      class="pointer-events-none relative z-0 -mt-24 ml-auto w-[92%] max-w-none select-none sm:w-[70%] lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:w-[54.8%]"
    />
    <img
      :src="asset('images/hero/white-linear-blur.png')"
      alt=""
      aria-hidden="true"
      class="pointer-events-none absolute bottom-0 right-[35.5%] z-[1] hidden h-[60%] w-auto max-w-none lg:block [-webkit-mask-image:linear-gradient(to_bottom,transparent,#000_60%)] [mask-image:linear-gradient(to_bottom,transparent,#000_60%)]"
    />
  </section>
</template>
