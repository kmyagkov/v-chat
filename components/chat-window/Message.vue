<template>
  <div
    class="chat-message"
    :class="messageTypeClass"
  >
    <span v-if="!isSystem" class="chat-message__author">{{message.name}}</span>
    <p class="chat-message__text">{{message.text}}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: true
    },
    user: {
      type: Object,
      required: true
    }
  },

  computed: {
    messageTypeClass() {
      if (this.isSystem) {
        return 'chat-message--system'
      }

      return this.message.id === this.user.id ?
        'chat-message--out' :
        'chat-message--in';
    },

    isSystem() {
      return this.message.name === 'system';
    }
  }
}
</script>

<style lang="scss">
.chat-message {
  min-width: 20%;
  max-width: 40%;
  padding: 16px;
  margin-bottom: 16px;
  color: white;
  border-radius: 8px;

  &--system {
    align-self: center;
    color: #409EFF;
  }

  &--out {
    align-self: flex-end;
    background: #409EFF;
  }

  &--in {
    align-self: flex-start;
    background: #303133;
  }
}

.chat-message__text {
  margin: 0;
}

.chat-message__author {
  font-size: 12px;
  line-height: 16px;
  font-style: italic;
  text-align: right;
}
</style>
