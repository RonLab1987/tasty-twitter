<template>
  <v-app>
    <v-main>
      <v-container>
        <div>
          <v-btn class="mx-2" icon raised large @click="toggleTheme">
            <v-icon dark large>
              {{ mdiThemeLightDark }}
            </v-icon>
          </v-btn>
        </div>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { mdiThemeLightDark } from "@mdi/js";
import { container } from '@/di'
import { IApplicationConfigRepositoryToken } from "@ronlab/tasty-twitter-core";
import { take } from "rxjs/operators";

export default Vue.extend({
  name: "App",
  data() {
    return {
      mdiThemeLightDark
    };
  },
  methods: {
    toggleTheme() {
      const applicationConfigRepository = container.resolve(
        IApplicationConfigRepositoryToken
      );
      applicationConfigRepository.config$.pipe(take(1)).subscribe(config => {
        applicationConfigRepository.changeConfig({
          ...config,
          darkTheme: !config.darkTheme
        });
      });
    }
  }
});
</script>
