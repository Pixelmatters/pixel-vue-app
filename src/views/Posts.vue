<template>
  <div>Posts page</div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Posts",

  computed: {
    ...mapState(["posts"])
  },

  mounted() {
    this.getPosts();
  },

  methods: {
    ...mapActions(["getPosts"])
  }
};
</script>
