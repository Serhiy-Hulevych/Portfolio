import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js"
import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { AppInsightsPlugin } from "vue3-application-insights";


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


/* add icons to the library */
library.add(fas, fab)

const aiOptions = {
    appName: "serhiy-portfolio", // Prefix for route events
    connectionString: "InstrumentationKey=25510122-b2a5-4e96-9afd-b0ca9086b431;IngestionEndpoint=https://westeurope-5.in.applicationinsights.azure.com/;LiveEndpoint=https://westeurope.livediagnostics.monitor.azure.com/",
    router: router,
    trackInitialPageView: true,
    trackAppErrors: true,
  };

createApp(App).use(router).use(AppInsightsPlugin, aiOptions).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
