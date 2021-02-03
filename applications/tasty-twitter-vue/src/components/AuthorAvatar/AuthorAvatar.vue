<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-avatar :size="avatarSize" v-bind="attrs" v-on="on">
        <img :src="author.avatar" :alt="author.fullname" />
      </v-avatar>
    </template>
    <span>{{ author.fullname }}</span>
  </v-tooltip>
</template>

<script lang="ts">
import Vue from "vue";
import { IAuthor } from "@ronlab/tasty-twitter-core";

export default Vue.extend({
  name: "AuthorAvatar",
  props: {
    author: {
      type: Object as () => IAuthor,
      required: true
    },
    small: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    avatarSize(): number {
      return this.small ? 46 : 84;
    }
  }
});
</script>
