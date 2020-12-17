<template>
  <v-list two-line>
    <v-list-item v-for="post in list" :key="post.id">
      <v-list-item-avatar class="justify-center text--white" color="accent">
        {{ post.commentsCount }}
      </v-list-item-avatar>
      <v-list-item-content>
        {{ post.content }}
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import Vue from "vue";
import { IMostDiscussedPostView } from "@/domain";

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
