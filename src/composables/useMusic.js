import { ref } from 'vue'

// 👉 Paste your YouTube video ID here (the part after "v=" in the link)
const VIDEO_ID = 'LhZ5GXCZtEw'

const TARGET_VOLUME = 35 // 0–100

const playing = ref(false)
const error = ref(false)

let player = null
let ready = false
let wantPlay = false
let started = false
let fadeTimer = null
let resumeOnVisible = false

const loadApi = () =>
  new Promise((resolve) => {
    if (window.YT?.Player) return resolve()
    const previous = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      previous?.()
      resolve()
    }
    if (!document.getElementById('yt-iframe-api')) {
      const tag = document.createElement('script')
      tag.id = 'yt-iframe-api'
      tag.src = 'https://www.youtube.com/iframe_api'
      document.head.appendChild(tag)
    }
  })

const fade = (to, ms = 1000, done) => {
  clearInterval(fadeTimer)
  const from = player.getVolume()
  const steps = 20
  let i = 0
  fadeTimer = setInterval(() => {
    i++
    player.setVolume(Math.round(from + ((to - from) * i) / steps))
    if (i >= steps) {
      clearInterval(fadeTimer)
      done?.()
    }
  }, ms / steps)
}

const startPlayback = () => {
  player.setVolume(0)
  player.playVideo()
  fade(TARGET_VOLUME, 1200)
}

const init = async () => {
  if (started) return
  started = true
  await loadApi()

  // Hidden, off-screen player
  const holder = document.createElement('div')
  holder.style.cssText =
    'position:fixed;left:-9999px;top:0;width:200px;height:200px;pointer-events:none;'
  const target = document.createElement('div')
  holder.appendChild(target)
  document.body.appendChild(holder)

  player = new window.YT.Player(target, {
    width: 200,
    height: 200,
    videoId: VIDEO_ID,
    playerVars: {
      controls: 0,
      disablekb: 1,
      fs: 0,
      playsinline: 1,
      rel: 0,
      modestbranding: 1,
      loop: 1,
      playlist: VIDEO_ID, // required for loop to work
      origin: window.location.origin,
    },
    events: {
      onReady: () => {
        ready = true
        player.setVolume(0)
        if (wantPlay) startPlayback()
      },
      onStateChange: (e) => {
        const S = window.YT.PlayerState
        if (e.data === S.PLAYING) playing.value = true
        else if (e.data === S.PAUSED) playing.value = false
        else if (e.data === S.ENDED) player.playVideo()
      },
      onError: (e) => {
        console.warn('YouTube player error', e.data) // 101/150 = embedding disabled for this video
        error.value = true
        playing.value = false
      },
    },
  })

  // Don't keep playing in a background tab
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      resumeOnVisible = playing.value
      if (playing.value) pause(true)
    } else if (resumeOnVisible) {
      resumeOnVisible = false
      play()
    }
  })
}

const play = () => {
  init()
  wantPlay = true
  if (ready) startPlayback()
}

const pause = (instant = false) => {
  wantPlay = false
  if (!player || !ready) return
  clearInterval(fadeTimer)
  if (instant) return player.pauseVideo()
  fade(0, 500, () => player.pauseVideo())
}

const toggle = () => (playing.value ? pause() : play())

export const useMusic = () => {
  init() // start loading the player while the Enter screen is showing
  return { playing, error, play, pause, toggle }
}