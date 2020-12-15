<template>
  <div class="post-views-list">
    <post-view
      v-for="postView of postViews"
      :post-view="postView"
      :key="postView.id"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { PostView } from "@/domain";
import { PostView as PostViewComponent } from "../PostView";

export default Vue.extend({
  name: "PostViewsList",
  props: {
    postViews: Array as () => PostView[]
  },
  components: {
    PostView: PostViewComponent
  }
});
</script>
