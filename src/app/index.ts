import "reflect-metadata";
import { container } from "tsyringe";
import Vue from "vue";
import App from "./App.vue";
import router from "../router";
import { makeVuetify } from "../vuetify";
import VueRx from "vue-rx";
import "./container";
import "../filters";
import { IApplicationConfigRepositoryToken } from "@/repositories/ApplicationConfigRepository";
import { skip, take } from "rxjs/operators";

Vue.use(VueRx);
Vue.config.productionTip = false;

const applicationConfigRepository = container.resolve(
  IApplicationConfigRepositoryToken
);

applicationConfigRepository.config$.pipe(take(1)).subscribe(({ darkTheme }) => {
  const app = new Vue({
    vuetify: makeVuetify(darkTheme),
    router,
    render: h => h(App)
  });

  applicationConfigRepository.config$
    .pipe(skip(1))
    .subscribe(({ darkTheme }) => {
      app.$vuetify.theme.dark = darkTheme;
    });

  app.$mount("#app");
});
