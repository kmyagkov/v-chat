<template>
  <section class="welcome">
    <h1 class="welcome__title">
      Welcome to V-Chat
    </h1>
    <div
      v-if="isRoomsCreated"
      class="welcome__rooms"
    >
      <h3>Choose the room:</h3>
      <Rooms class="welcome__rooms-list" :rooms="rooms"/>
      <p class="welcome__tip">or create new</p>
    </div>
    <CreateRoom/>
  </section>
</template>

<script>
import Rooms from '@/components/rooms';
import CreateRoom from '@/components/create-room';
import {mapState, mapMutations} from 'vuex';

export default {
  components: {
    Rooms,
    CreateRoom
  },

  computed: {
    ...mapState(['rooms']),
    isRoomsCreated() {
      return !!this.rooms.length;
    }
  },

  methods: {
    ...mapMutations(['setRooms'])
  },

  mounted() {
    this.$socket.emit('init', (rooms) => {
      this.setRooms(rooms);
    });
  }
}
</script>

<style scoped lang="scss">
.welcome {
  display: flex;
  flex-direction: column;
  padding: 16px;
}

.welcome__title {
  margin-bottom: 32px;
}

.welcome__rooms {
  margin-bottom: 16px;
}

.welcome__rooms-list {
  margin-bottom: 16px;
}

.welcome__create-room {
  text-align: center;
}

.welcome__tip {
  margin: 0;
  text-align: center;
}
</style>
