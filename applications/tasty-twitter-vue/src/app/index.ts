import { container } from '@/di'
import { IApplicationConfigRepositoryToken } from "@ronlab/tasty-twitter-core";
import Vue from "vue";
import App from "./App.vue";
import router from "../router";
import { makeVuetify } from "../vuetify";
import VueRx from "vue-rx";
import "../filters";
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
