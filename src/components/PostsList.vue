<template>
  <div>
    <p v-for="post in posts" :key="post.id">
      <router-link :to="{ name: 'post', params: { postId: post.id } }">{{ post.title }}</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "PostsList",

  props: ["posts"]
};
</script>
