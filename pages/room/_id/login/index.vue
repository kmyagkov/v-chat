<template>
<form class="login" @submit.prevent="submit">
  <h1>Type your nickname:</h1>
  <el-input
    class="login__input"
    placeholder="Your nickname"
    v-model="login"
  />
  <el-button
    native-type="submit"
    type="primary"
    class="v-btn"
    :disabled="isLoginEntered"
  >
      Enter chat
    </el-button>
</form>
</template>

<script>
import {mapMutations, mapState} from 'vuex';

export default {
  data() {
    return {
      login: ''
    }
  },
  computed: {
    ...mapState(['room']),
    isLoginEntered() {
      return !this.login;
    }
  },
  methods: {
    ...mapMutations(['setUser']),
    submit() {
      this.setUser(this.login);
      this.$router.push(`/room/${this.room}`);
    }
  }
}
</script>

<style lang="scss">
.login {
  display: flex;
  flex-direction: column;
}

.login__input {
  margin-bottom: 24px;

  .el-input__inner {
    height: 58px;
  }
}
</style>