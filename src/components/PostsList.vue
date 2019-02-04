<template>
  <div>
    <p v-for="post in posts" :key="post.id">{{ post.title }}</p>
  </div>
</template>

<script>
export default {
  name: "PostsList",

  props: ["posts"]
};
</script>
