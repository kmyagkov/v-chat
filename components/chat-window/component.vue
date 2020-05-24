<template>
<div class="chat-window">
  <transition-group
    class="chat-window__area"
    name="fade"
    tag="div"
  >
    <Message
      v-for="(message,i) of messages"
      :key="i"
      :message="message"
      :user="user"
      ref="messagesList"
    />
  </transition-group>
</div>
</template>

<script>
import Message from './Message';
import {mapState} from 'vuex';

export default {
  components: {
    Message
  },
  props: {
    messages: {
      type: Array
    }
  },
  computed: mapState(['user']),

  updated() {
    this.$refs.messagesList[this.$refs.messagesList.length - 1].$el.scrollIntoView();
  }
}
</script>

<style lang="scss">
.chat-window {
  display: flex;
  padding: 16px;
}

.chat-window__area {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  background: darken(#303133, 5%);
  border-radius: 8px;
  overflow-y: scroll;
}
</style>
