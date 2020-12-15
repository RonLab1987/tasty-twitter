<template>
  <v-container>
    <PostViewsList :post-views="postViews" />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { PostViewsList } from "@/components/PostViewsList";

import { postsRepository } from "@/app/container";

export default Vue.extend({
  name: "Home",
  subscriptions: () => {
    return {
      postViews: postsRepository.postViews$,
      mostDiscussedPosts: postsRepository.mostDiscussedPosts$
    };
  },
  components: {
    PostViewsList
  }
});
</script>
