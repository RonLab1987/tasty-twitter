<template>
  <div class="most-discussed-posts-list">
    <v-list two-line v-if="list.length">
      <v-list-item v-for="post in list" :key="post.id">
        <v-list-item-avatar class="justify-center text--white" color="accent">
          {{ post.commentsCount }}
        </v-list-item-avatar>
        <v-list-item-content class="text-break">
          {{ post.content }}
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-alert outlined type="info" v-else>
      Пока нет обсуждений
    </v-alert>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { IMostDiscussedPostView } from "@ronlab/tasty-twitter-core";

export default Vue.extend({
  name: "MostDiscussedPostsList",
  props: {
    list: {
      type: Array as () => IMostDiscussedPostView[],
      required: true
    }
  }
});
</script>
