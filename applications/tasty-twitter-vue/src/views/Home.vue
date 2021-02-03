<template>
  <v-row>
    <v-col :cols="8">
      <create-post-form :on-submit="onSubmitHandler" />
      <PostViewsList :post-views="postViews" />
    </v-col>
    <v-col :cols="4">
      <h3 class="mb-4">Самые обсуждаемые посты</h3>
      <most-discussed-posts-list :list="mostDiscussedPostViews" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import { container } from '@/di'
import {
  IPostFeedServiceToken,
  IMostDiscussedPostFeedServiceToken
} from "@ronlab/tasty-twitter-core";

import { PostViewsList } from "@/components/PostViewsList";
import { MostDiscussedPostsList } from "@/components/MostDiscussedPostsList";
import { CreatePostForm, NewPost } from "@/components/CreatePostForm";

export default Vue.extend({
  name: "Home",
  subscriptions: () => {
    return {
      postViews: container.resolve(IPostFeedServiceToken).postViews$,
      mostDiscussedPostViews: container.resolve(
        IMostDiscussedPostFeedServiceToken
      ).mostDiscussedPostViews$
    };
  },
  methods: {
    onSubmitHandler(newPost: NewPost) {
      return container.resolve(IPostFeedServiceToken).createPost(newPost);
    }
  },
  components: {
    PostViewsList,
    MostDiscussedPostsList,
    CreatePostForm
  }
});
</script>
