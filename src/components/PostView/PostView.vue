<template>
  <div class="post-view">
    <v-card outlined>
      <div class="post-view--post-container">
        <div class="post-view--avatar-container">
          <v-avatar height="50">
            <img
              :src="postView.author.avatar"
              :alt="postView.author.fullname"
            />
          </v-avatar>
        </div>
        <div class="post-view--content-container">
          <v-card-text>
            {{ postView.content }}
          </v-card-text>
        </div>
      </div>
    </v-card>
    <div class="post-view--comment-area"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { PostView } from "@/domain";

export default Vue.extend({
  name: "PostView",
  props: {
    postView: Object as () => PostView[]
  }
});
</script>

<style lang="sass">
@import "./post-view"
</style>
