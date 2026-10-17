# JeySigns Portfolio — Vue 3 + Tailwind CSS

Replica of the Figma design, split by section. Run `npm install` then `npm run dev`.

```
src/
  App.vue                     page order
  components/
    FlashScreen.vue           splash screen
    SiteHeader.vue / HeroSection.vue
    ServicesSection.vue       01 / What I create
    WebProjectsSection.vue    02 / My recent works  (+ ProjectCard.vue)
    GraphicDesignSection.vue  social posts (SocialShowcase, IgFrame, IgCard) + PosterGallery
    ShirtDesignSection.vue    (+ ShirtShowcase.vue)
    LogoGallerySection.vue
    AboutSection.vue          03 / More about me
    ExperienceSection.vue
    ContactSection.vue        (+ SiteFooter.vue)
    ui/                       AppIcon, MarqueeBand, SectionLabel, MetaItem
  data/                       all text, links and image paths
public/                       optimized images, fonts, CV
```

Edit project links in `src/data/projects.js` (currently `#`) and social links in `src/data/site.js`.
Missing asset: the landscape "A meal shared today" poster — add it to `public/images/graphic/` and set its `image` in `src/data/graphic.js`.
