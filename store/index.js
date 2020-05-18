export const state = () => ({
  user: null,
  room: null
});

export const actions = {};

export const mutations = {
  setUser(state, user) {
    state.user = user;
  },

  setRoom(state, room) {
    state.room = room;
  }
};
