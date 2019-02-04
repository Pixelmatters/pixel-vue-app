<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <div>
      <h2>Comments</h2>
      <div v-for="comment in comments" :key="comment.id">
        <h4>
          {{ comment.name }}
          <small>{{ comment.email }}</small>
        </h4>
        <p>{{ comment.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Post",

  data() {
    return {
      post: {},
      comments: []
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
    this.fetchComments();
  },

  methods: {
    ...mapActions(["getPosts"]),

    async fetchComments() {
      const { postId } = this.$route.params;
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );
      const comments = await response.json();
      this.comments = comments;
    }
  }
};
</script>

