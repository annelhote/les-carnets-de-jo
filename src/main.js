import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faBars, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './main.scss'

Vue.use(BootstrapVue)
library.add(faFacebookSquare)
library.add(faInstagramSquare)
library.add(faBars)
library.add(faQuoteLeft)
library.add(faQuoteRight)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
