<template>
<section class="chat">
  <div class="chat__inner">
    <transition name="slide">
      <ChatNav
        class="chat__aside"
        v-if="isSidebar"
        :users="users"
      />
    </transition>
    <div class="chat__main" :class="{'collapse': isSidebar}">
      <header class="chat__header">
        <div class="chat__controls">
          <el-button
            @click="exit"
            type="primary"
            icon="el-icon-back"
            circle
          />
          <el-button
            @click="toggleSidebar"
            type="primary"
            icon="el-icon-menu"
            circle
          />
        </div>
        <h1 class="chat__title">{{room}}</h1>
      </header>
      <ChatWindow class="chat__window" :messages="messages"/>
      <footer class="chat__footer">
        <form @submit.prevent="sendMessage" class="chat__form">
          <el-input
            type="textarea"
            placeholder="Type message..."
            v-model="messageText"
            class="chat__input"
            @keydown.shift.enter.exact.native.prevent="newLine"
            @keydown.enter.exact.native.prevent="sendMessage"
          >
          </el-input>
          <div class="chat__form-tip">
            Press "enter" to send, "shift+enter" to new line
          </div>
          <button
            type="submit"
            class="el-button el-button--primary v-btn"
          >
            Send message
          </button>
        </form>
      </footer>
    </div>
  </div>
</section>
</template>

<script>
import ChatNav from '@/components/chat-nav';
import ChatWindow from '@/components/chat-window';

import {mapState, mapMutations, mapGetters} from 'vuex';

export default {
  components: {
    ChatNav,
    ChatWindow
  },
  data() {
    return {
      isSidebar: true,
      messageText: ''
    }
  },
  middleware: ['chat'],
  layout: 'chat',
  methods: {
    ...mapMutations(['clear']),
    toggleSidebar() {
      this.isSidebar = !this.isSidebar;
    },

    exit() {
      this.$socket.emit('userLeft', this.user.id, () => {
        this.$router.push('/?message=exit');
        this.clear();
      });
    },

    sendMessage() {
      this.$socket.emit('createMessage', {
        text: this.messageText,
        id: this.$store.state.user.id
      }, (response) => {
        if (typeof response === 'string') {
          console.error(response)
        } else {
          this.messageText = '';
        }
      });
    },

    newLine() {
      this.messageText += '\n';
    }
  },
  computed: {
    ...mapState(['user', 'messages', 'users']),
    ...mapGetters(['room'])
  }
}
</script>

<style lang="scss">
.chat {
  display: flex;
  flex-grow: 1;
}

.chat__inner {
  display: flex;
  flex-grow: 1;
}

.chat__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid darken(#303133, 5%);
}

.chat__title {
  margin: 0 0 0 24px;
  font-style: italic;
}

.chat__aside {
  position: absolute;
  width: 320px;
  height: 100%;
}

.chat__main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-left: 0;
  transition: padding-left .4s;

  &.collapse {
    padding-left: 320px;
  }
}

.chat__window {
  flex-grow: 1;
}

.chat__footer {
  display: flex;
  flex-direction: column;
  min-height: 320px;
  padding: 16px;
  background: #303133;
  border-top: 1px solid darken(#303133, 5%);
}

.chat__form {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.chat__input {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 8px;

  .el-textarea__inner {
    flex-grow: 1;
    font-size: 16px;
    line-height: 24px;
    color: white;
    background: darken(#303133, 5%);
    border-color: transparent;
  }
}

.chat__form-tip {
  margin-bottom: 16px;
  font-size: 12px;
  line-height: 16px;
  font-style: italic;
  text-align: right;
}
</style>
