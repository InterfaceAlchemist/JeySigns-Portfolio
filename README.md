# JeySigns Portfolio

Personal portfolio of **Jeremy Macaspac (JeySigns)**, a creative developer and designer from the Philippines. It covers frontend development, UI/UX, graphic design and logo design.

**Live site:** [jeysigns.vercel.app](https://jeysigns.vercel.app/)

![Portfolio preview](./public/preview.png)

## Features

- Splash screen with the JEYSIGNS wordmark (shown once per browser session)
- "Enter the portfolio" screen that starts the background music, with a "continue without sound" option
- Floating music player with a spinning disc, equalizer bars and play/pause
- Sticky navigation bar with section highlighting and a back-to-top button
- Responsive layout for desktop, tablet and mobile
- Web development projects with tools used and links
- Graphic design showcase: social media posts, a poster gallery, shirt designs and a logo gallery
- Click-to-view lightbox for posters and social posts, with a hover preview, a blur-to-sharp full-quality PNG, keyboard navigation and a download button
- Downloadable CV
- Visitor analytics with Vercel Web Analytics

## Tech stack

- [Vue 3](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- YouTube IFrame API (background music)
- Fonts: Intel One Mono, Caveat, Lexend Zetta
- Hosted on Vercel

## Getting started

```bash
git clone https://github.com/InterfaceAlchemist/JeySigns-Portfolio.git
cd JeySigns-Portfolio
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  App.vue                     page order and the splash / enter-screen flow
  composables/
    useMusic.js               background music (YouTube player, fades, pause on hidden tab)
  components/                 one component per section
    FlashScreen.vue
    SoundGate.vue             "Enter the portfolio" screen
    MusicPlayer.vue           floating player
    SiteNav.vue               sticky nav and back-to-top
    HeroSection.vue
    ServicesSection.vue
    WebProjectsSection.vue
    GraphicDesignSection.vue
    ShirtDesignSection.vue
    LogoGallerySection.vue
    AboutSection.vue
    ExperienceSection.vue
    ContactSection.vue
    PosterLightbox.vue
    ui/                       shared pieces (icons, marquee, labels, hover overlay)
  data/                       text, links and image paths
public/                       images, fonts and CV
```

## Customizing

- **Content:** edit the files in `src/data/`. You don't need to touch the components.
- **Project links:** set `source`, `demo` and `caseStudy` in `src/data/projects.js`. Add `demoUpdating: true` or `caseStudyUpdating: true` to show an "Updating…" button.
- **Music:** change `VIDEO_ID` at the top of `src/composables/useMusic.js` to the ID of any YouTube video that allows embedding.
- **Full-quality images:** each poster and social post has a small `.webp` for the page and a `.png` with the same lowercase name next to it, used by the lightbox. File names are case sensitive on the hosting server.

## Contact

- Email: jeremymacaspac460@gmail.com
- Instagram: @404notjeremi / @jeysigns

© 2026 JeySigns. All rights reserved. Designs, logos and images are not licensed for reuse.
