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

export default {
  components: {
    Rooms,
    CreateRoom
  },

  data() {
    return {
      rooms: [
        {
          name: 'Room 1',
          id: 'id1'
        },
        {
          name: 'Room 2',
          id: 'id2'
        }
      ]
    };
  },

  computed: {
    isRoomsCreated() {
      return !!this.rooms.length;
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
</style>
