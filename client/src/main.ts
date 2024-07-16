import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import App from './App.vue'
import router from './router'
import fontAwesomeIcon from "@/plugins/fontAwasome"


const app =createApp(App)
app.component("font-awesome-icon", fontAwesomeIcon);
app.use(router)
app.mount('#app')
