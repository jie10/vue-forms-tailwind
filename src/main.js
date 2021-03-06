import { createApp } from 'vue'
import App from './App.vue'
import 'tailwindcss/tailwind.css'
import TailContainer from './components/layouts/TailContainer.vue'

const app = createApp(App)
app.component('tail-container', TailContainer)
app.mount('#app')
