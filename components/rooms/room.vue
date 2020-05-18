<template>
<li
  class="room"
  @click="login"
>
  <slot/>
</li>
</template>

<script>
export default {
  props: {
    id: {
      required: true
    }
  },
  methods: {
    login() {
      this.$router.push({path: `/room/${this.id}/login`});
    }
  }
}
</script>

<style scoped lang="scss">
.room {
  background: #303133;
  cursor: pointer;
  transition: background-color .3s;

  &:hover {
    color: #303133;
    background: #409EFF;
  }
}
</style>