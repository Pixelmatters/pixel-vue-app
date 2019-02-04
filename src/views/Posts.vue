<template>
  <div>Posts page</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Posts",

  computed: {
    ...mapState(["posts"])
  }
};
</script>
