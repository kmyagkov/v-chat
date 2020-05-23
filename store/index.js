import ro from 'element-ui/src/locale/lang/ro';

export const state = () => ({
  user: null,
  room: null,
  messages: [],
  rooms: [],
  users: []
});

export const actions = {};

export const mutations = {
  createUser(state, user) {
    state.user = user;
  },

  setRoom(state, room) {
    state.room = room;
  },

  clear(state) {
    state.user = null;
    state.messages = [];
    state.users = [];
  },

  setRooms(state, rooms) {
    state.rooms = rooms;
  },

  SOCKET_newMessage(state, message) {
    state.messages.push(message);
  },

  SOCKET_updateUsers(state, users) {
    state.users = users;
  }
};

export const getters = {
  room(state) {
    return state.room;
  }
};
