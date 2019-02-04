<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Post",

  data() {
    return {
      post: {}
    };
  },

  computed: {
    ...mapState(["posts"])
  },

  async mounted() {
    const postId = parseInt(this.$route.params.postId);
    if (!this.posts.length) {
      await this.getPosts();
    }
    this.post = this.$store.getters.getPostById(postId);
  },

  methods: {
    ...mapActions(["getPosts"])
  }
};
</script>

