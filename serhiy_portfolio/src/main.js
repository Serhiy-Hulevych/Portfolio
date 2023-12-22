import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js"
import 'bulma/css/bulma.css'; // Import Bulma styles
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fas)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
