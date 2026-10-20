import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import reveal from './directives/reveal'
import { inject } from '@vercel/analytics'

inject()

const app = createApp(App)
app.directive('reveal', reveal)
app.mount('#app')
