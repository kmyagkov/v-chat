<template>
<li
  class="room"
  @click="login"
>
  {{room.name}}
</li>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
  props: {
    room: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations(['setRoom']),
    login() {
      this.setRoom(this.room.name);
      this.$router.push({path: `/room/${this.room.name}/login`});
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
