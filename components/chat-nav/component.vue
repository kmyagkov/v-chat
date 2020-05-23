<template>
<nav class="chat-nav">
  <ul class="chat-nav__list">
    <li
      class="chat-nav__item"
      v-for="{name, id} of users"
      :key="id"
    >
      {{name}}
    </li>
  </ul>
</nav>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.chat-nav {
  padding-top: 16px;
  background: #303133;
  border-right: 1px solid darken(#303133, 5%);
}

.chat-nav__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.chat-nav__item {
  padding: 16px;
  border-bottom: 1px solid darken(#303133, 5%);
  cursor: pointer;
}
</style>
