//-- Dependencies
import Vue from 'vue'

//-- Plugins
import vuetify from './plugins/vuetify'

//-- Primary component
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
