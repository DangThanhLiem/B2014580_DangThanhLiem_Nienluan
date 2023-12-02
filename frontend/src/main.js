import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/style.css'
import VueAxios from 'vue-axios'
import axios from 'axios' 
const app= createApp(App)
app.use(router)
app.use(VueAxios,axios)
app.mount('#app')
