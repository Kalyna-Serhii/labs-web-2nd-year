import '@/assets/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@/assets/css/styles.css';
import '@/assets/css/font-awesome.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add( fas, fab );

import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/router';


const app = createApp(App)
app
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app');