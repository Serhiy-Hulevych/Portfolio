import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js"
import 'bulma/css/bulma.css'; // Import Bulma styles

createApp(App).use(router).mount('#app')
