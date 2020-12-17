import Vue from "vue";
import App from "./App.vue";
import router from "../router";
import { makeVuetify } from "../vuetify";
import VueRx from "vue-rx";

Vue.use(VueRx);
Vue.config.productionTip = false;

new Vue({
  vuetify: makeVuetify(true),
  router,
  render: h => h(App)
}).$mount("#app");
