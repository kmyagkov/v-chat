<template>
  <section class="welcome">
    <h1 class="welcome__title">
      Welcome to V-Chat
    </h1>
    <div class="welcome__spinner" v-if="loading">
      <Spinner/>
    </div>
    <div
      v-else-if="isRoomsCreated"
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
import Spinner from '@/components/spinner';
import {mapState, mapMutations} from 'vuex';

export default {
  components: {
    Rooms,
    CreateRoom,
    Spinner
  },

  computed: {
    ...mapState(['rooms', 'loading']),
    isRoomsCreated() {
      return !!this.rooms.length;
    }
  },

  methods: {
    ...mapMutations(['setRooms', 'setLoading'])
  },

  async mounted() {
    try {
      await this.$socket.emit('init', (rooms) => {
        this.setRooms(rooms);
        this.setLoading();
      });
    } catch (e) {
      console.error(e);
    }
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

.welcome__spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 48px;
}
</style>
