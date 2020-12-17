import "reflect-metadata";
import Vue from "vue";
import App from "./App.vue";
import router from "../router";
import { makeVuetify } from "../vuetify";
import VueRx from "vue-rx";
import "./container";

Vue.use(VueRx);
Vue.config.productionTip = false;

new Vue({
  vuetify: makeVuetify(false),
  router,
  render: h => h(App)
}).$mount("#app");
