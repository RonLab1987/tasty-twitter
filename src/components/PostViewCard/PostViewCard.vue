<template>
  <v-card class="post-view-card" outlined>
    <v-img
      class="post-view-card--image"
      :src="postView.image"
      :aspect-ratio="16 / 9"
      v-if="postView.image"
    />
    <v-card-text class="post-view-card--post-container">
      <div class="post-view-card--avatar-container">
        <AuthorAvatar :author="postView.author" />
      </div>
      <div class="post-view-card--content-container">
        <span class="post-view-card--create-date">
          {{ postView.createDate }}
        </span>
        {{ postView.content }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { IPostView } from "@/domain";
import { AuthorAvatar } from "../AuthorAvatar";

export default Vue.extend({
  name: "PostViewCard",
  props: {
    postView: Object as () => IPostView[]
  },
  components: {
    AuthorAvatar
  }
});
</script>

<style lang="sass">
@import "./post-view-card"
</style>
