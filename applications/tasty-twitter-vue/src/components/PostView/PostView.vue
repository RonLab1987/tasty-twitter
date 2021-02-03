<template>
  <div class="post-view">
    <post-view-card :post-view="postView" />
    <div class="post-view--comment-area">
      <post-view-comment
        v-for="commentView of postView.comments"
        :comment-view="commentView"
        :key="commentView.id"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { IPostView } from "@ronlab/tasty-twitter-core";
import { PostViewCard } from "../PostViewCard";
import { PostViewComment } from "../PostViewComment";

export default Vue.extend({
  name: "PostView",
  props: {
    postView: Object as () => IPostView[]
  },
  components: {
    PostViewCard,
    PostViewComment
  }
});
</script>

<style lang="sass">
@import "./post-view"
</style>
