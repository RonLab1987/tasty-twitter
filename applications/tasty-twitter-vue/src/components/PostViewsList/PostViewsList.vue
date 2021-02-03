<template>
  <div class="post-views-list">
    <template v-if="postViews.length">
      <post-view
        v-for="postView of postViews"
        :post-view="postView"
        :key="postView.id"
      />
    </template>
    <v-alert outlined type="info" v-else>
      Опубликуйте ваш первый пост
    </v-alert>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { IPostView } from "@/domain";
import { PostView } from "../PostView";

export default Vue.extend({
  name: "PostViewsList",
  props: {
    postViews: Array as () => IPostView[]
  },
  components: {
    PostView
  }
});
</script>
