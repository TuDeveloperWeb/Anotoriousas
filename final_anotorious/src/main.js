
import App from './App.vue'

import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);


// ... your other configurations and components



// Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
