import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.min.css'
import './assets/css/styles.css'
import './assets/js/inputmask.min.js'
import './assets/js/inputMask.js'

import { createApp } from 'vue'
import Register from './Register.vue'
import Footer from './Footer.vue'
import Datatable from './Datatable.vue'
import Header from './Header.vue'



createApp(Datatable).mount('#dataTable')
createApp(Header).mount('#header')
createApp(Register).mount('#registerForm')
createApp(Footer).mount('#footer')