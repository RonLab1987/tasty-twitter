<template>
  <v-card class="post-view-comment" flat>
    <v-card-text class="post-view-comment--post-container">
      <div class="post-view-comment--avatar-container">
        <AuthorAvatar :author="commentView.author" small />
      </div>
      <div class="post-view-comment--content-container">
        <span class="post-view-comment--create-date">
          {{ commentView.createDate | toLocalDateTime }}
        </span>
        {{ commentView.content }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { ICommentView } from "@/domain";
import { AuthorAvatar } from "../AuthorAvatar";

export default Vue.extend({
  name: "PostViewComment",
  props: {
    commentView: Object as () => ICommentView
  },
  components: {
    AuthorAvatar
  }
});
</script>

<style lang="sass">
@import "./post-view-comment"
</style>
