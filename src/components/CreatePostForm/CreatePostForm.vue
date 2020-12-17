<template>
  <v-form
    class="create-post-form"
    @submit.prevent="submitHandler"
    ref="form"
    :disabled="submitInProgress"
  >
    <div class="create-post-form--input-area">
      <v-text-field
        v-model="model.content"
        :rules="rules.content"
        placeholder="Что происходит?"
        outlined
      />
    </div>
    <v-btn color="primary" type="submit" x-large :loading="submitInProgress">
      Поделиться
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import { ISubmitCallback } from "./types";

type FormRef = {
  validate(): boolean;
  resetValidation(): void;
};

export default Vue.extend({
  name: "CreatePostForm",
  data() {
    return {
      submitInProgress: false,
      model: {
        content: ""
      },
      rules: {
        content: [
          (value: string | undefined) =>
            (value && !!value.trim()) || "Сообщение обязательно"
        ]
      }
    };
  },
  props: {
    onSubmit: {
      type: (Function as unknown) as () => ISubmitCallback,
      required: true
    }
  },
  methods: {
    submitHandler() {
      const formRef = (this.$refs.form as unknown) as FormRef;

      if (!formRef.validate()) {
        return;
      }

      this.submitInProgress = true;
      this.onSubmit(this.model)
        .then(() => {
          this.resetModel();
          formRef.resetValidation();
        })
        .catch(error => {
          throw error;
        })
        .finally(() => {
          this.submitInProgress = false;
        });
    },
    resetModel() {
      this.model.content = "";
    }
  }
});
</script>

<style lang="sass">
@import "./create-post-form.sass"
</style>
