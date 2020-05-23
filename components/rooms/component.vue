<template>
   <ul class="rooms">
      <Room
        class="rooms__item"
        v-for="room of rooms"
        :key="room.id"
        :room="room"
      />
    </ul>
</template>

<script>
import Room from './room.vue';

export default {
  components: {
    Room
  },

  props: {
    rooms: {
      type: Array
    }
  }
}
</script>

<style scoped lang="scss">
.rooms {
  padding: 0;
  margin: 0;
  list-style-type: none;
  border: 1px solid #409EFF;
  border-radius: 4px;
  overflow: hidden;
}

.rooms__item {
  padding: 16px;

  &:not(:last-of-type) {
    border-bottom: 1px solid #409EFF;
  }
}
</style>
