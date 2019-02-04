<template>
  <div>
    <PostsList :posts="posts"/>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import PostsList from "@/components/PostsList.vue";

export default {
  name: "Posts",

  components: {
    PostsList
  },

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
