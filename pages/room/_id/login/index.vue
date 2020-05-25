<template>
<form class="login" @submit.prevent="submit">
  <h1 class="login__title">Type your nickname:</h1>
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
import {mapMutations, mapGetters} from 'vuex';

export default {
  data() {
    return {
      login: ''
    }
  },
  computed: {
    ...mapGetters(['room']),
    isLoginEntered() {
      return !this.login;
    }
  },
  methods: {
    ...mapMutations(['createUser']),

    submit() {
      const payload = {
        user: this.login,
        room: this.room
      };

      this.$socket.emit('userJoined', payload, (response) => {
        if (typeof response === 'string') {
          console.error(response)
        } else {
          this.createUser({
            name: this.login,
            id: response.userId
          });
          this.$router.push(`/room/${this.room}`);
        }
      });
    }
  }
}
</script>

<style lang="scss">
.login {
  display: flex;
  flex-direction: column;
}

.login__title {
  font-size: 24px;
  line-height: 32px;
}

.login__input {
  margin-bottom: 24px;

  .el-input__inner {
    height: 58px;
  }
}
</style>
