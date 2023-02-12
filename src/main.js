import Vue from 'vue'
import App from './App.vue'
import exchangeWidget from './exhangeWidget.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);



/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
//import { fas } from "@fortawesome/free-solid-svg-icons";
  //  import { faBluetooth } from '@fortawesome/free-brands-svg-icons'
    import { faInstagram } from '@fortawesome/free-brands-svg-icons'
    import {faFacebook } from '@fortawesome/free-brands-svg-icons'
    import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
    import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
    import { faPhone } from '@fortawesome/free-solid-svg-icons'
  
//library.add(fas);

/* add icons to the library */
library.add(faTwitter,faInstagram,faFacebook,faEnvelope,faWhatsapp,faPhone)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.filter('momo',function(value){
  return value.toUpperCase();
  
})
Vue.config.productionTip = false

Vue.component('exchangeWidget',exchangeWidget)
new Vue({
  render: h => h(App),
}).$mount('#app')
