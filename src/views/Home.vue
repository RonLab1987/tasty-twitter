<template>
  <v-container>
    <v-row>
      <v-col :cols="7">
        <PostViewsList :post-views="postViews" />
      </v-col>
      <v-col :cols="5">
        <div v-for="view of mostDiscussedPostViews" :key="view.id">
          {{ view }}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { container } from "tsyringe";
import { PostViewsList } from "@/components/PostViewsList";
import { IPostFeedServiceToken } from "@/services/PostFeedService";
import { IMostDiscussedPostFeedServiceToken } from "@/services/MostDiscussedPostFeedService";

export default Vue.extend({
  name: "Home",
  subscriptions: () => {
    const postFeedService = container.resolve(IPostFeedServiceToken);
    const mostDiscussedPostFeedService = container.resolve(
      IMostDiscussedPostFeedServiceToken
    );
    return {
      postViews: postFeedService.postViews$,
      mostDiscussedPostViews:
        mostDiscussedPostFeedService.mostDiscussedPostViews$
    };
  },
  components: {
    PostViewsList
  }
});
</script>
