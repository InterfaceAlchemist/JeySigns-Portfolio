# JeySigns Portfolio

Personal portfolio of **Jeremy Macaspac (JeySigns)**, a creative developer and designer from the Philippines. It covers frontend development, UI/UX, graphic design and logo design.

**Live site:** [jeysigns.vercel.app](https://jeysigns.vercel.app/)

![Portfolio preview](./public/preview.png)

## Features

- Splash screen with the JEYSIGNS wordmark
- Responsive layout for desktop, tablet and mobile
- Web development projects with tools used and links
- Graphic design showcase: social media posts, a poster gallery, shirt designs and a logo gallery
- Poster lightbox with a hover preview, a blur-to-sharp full-quality PNG, keyboard navigation and a download button
- Downloadable CV

## Tech stack

- [Vue 3](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
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
  App.vue                     page order
  components/                 one component per section
    FlashScreen.vue
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
    ui/                       shared pieces (icons, marquee, labels)
  data/                       text, links and image paths
public/                       images, fonts and CV
```

To update content, edit the files in `src/data/`. You don't need to touch the components.

## Contact

- Email: jeremymacaspac460@gmail.com
- Instagram: @404notjeremi / @jeysigns

© 2026 JeySigns. All rights reserved. Designs, logos and images are not licensed for reuse.
