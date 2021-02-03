import Vue from "vue";
import Vuetify from "vuetify/lib";

export const makeVuetify = (dark = false): Vuetify => {
  Vue.use(Vuetify);
  return new Vuetify({
    theme: {
      dark: dark
    }
  });
};
