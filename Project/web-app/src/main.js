// import '@/assets/css/bootstrap.min.css'
// import '@/assets/css/font-awesome.min.css'
import '@/assets/css/styles.css'
import '@/assets/js/inputmask.min.js'
import '@/assets/js/inputMask.js'

import {createApp} from 'vue'
import App from './App.vue'
import router from '@/router/router'


const app = createApp(App)
app
    .use(router)
    .mount('#app')