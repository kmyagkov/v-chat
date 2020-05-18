<template>
<form
  class="create-room"
  @submit.prevent="submit"
>
  <el-input
    class="create-room__input"
    placeholder="Room name"
    v-model="roomName"
  />
  <el-button
    native-type="submit"
    type="primary"
    class="v-btn"
    :disabled="isRoomNameEntered"
  >
    Create room
  </el-button>
</form>
</template>

<script>
export default {
  data() {
    return {
      roomName: ''
    };
  },

  computed: {
    isRoomNameEntered() {
      return !this.roomName;
    }
  },

  methods: {
    submit() {
      console.log(`Room ${this.roomName} created`);
      this.$router.push({path: `/room/${this.roomName}/login`});
    }
  }
}
</script>

<style lang="scss">
.create-room {
  display: flex;
  flex-direction: column;
}

.create-room__input {
  margin-bottom: 24px;

  .el-input__inner {
    height: 58px;
  }
}
</style>