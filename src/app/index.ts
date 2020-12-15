import Vue from "vue";
import App from "./App.vue";
import router from "../router";
import { makeVuetify } from "../vuetify";

Vue.config.productionTip = false;

new Vue({
  vuetify: makeVuetify(false),
  router,
  render: h => h(App)
}).$mount("#app");
