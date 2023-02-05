import Vue from 'vue'
import App from './App.vue'
import exchangeWidget from './exhangeWidget.vue'



/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

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
