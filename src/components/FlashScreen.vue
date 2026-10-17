<script setup>
import { onMounted, ref } from 'vue'
import { asset } from '../utils'

// Splash / flash screen: orange JEYSIGNS wordmark on white, wipes up when the page is ready.
const emit = defineEmits(['done'])

const leaving = ref(false)
const gone = ref(false)
const mask = `url(${asset('images/misc/logo-wordmark.png')})`

onMounted(() => {
  document.body.classList.add('is-locked')

  const minimumShow = new Promise((resolve) => setTimeout(resolve, 2100))
  const pageLoaded =
    document.readyState === 'complete'
      ? Promise.resolve()
      : new Promise((resolve) => window.addEventListener('load', resolve, { once: true }))
  const fontsReady = document.fonts?.ready ?? Promise.resolve()
  const safetyNet = new Promise((resolve) => setTimeout(resolve, 5000))

  Promise.all([minimumShow, Promise.race([Promise.all([pageLoaded, fontsReady]), safetyNet])]).then(() => {
    leaving.value = true
    setTimeout(() => {
      gone.value = true
      document.body.classList.remove('is-locked')
      emit('done')
    }, 950)
  })
})
</script>

<template>
  <div
    v-if="!gone"
    class="fixed inset-0 z-[100] grid place-items-center bg-white transition-transform duration-[900ms] ease-[cubic-bezier(0.77,0,0.175,1)]"
    :class="leaving ? '-translate-y-full' : 'translate-y-0'"
    role="status"
    aria-label="Loading JeySigns portfolio"
  >
    <div
      class="aspect-[434/101] w-[clamp(11rem,16.6vw,32rem)] animate-flash-word bg-brand motion-reduce:animate-none"
      :style="{
        WebkitMaskImage: mask,
        maskImage: mask,
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
      }"
    />
    <span class="sr-only">JEYSIGNS</span>
  </div>
</template>
