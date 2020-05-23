class Rooms {
  constructor() {
    this.rooms = [];
  }

  add(room) {
    this.rooms.push(room);
  }

  get(id) {
    return this.rooms.find((room) => room.id === id);
  }

  getAll() {
    return this.rooms;
  }

  remove(id) {
    const room = this.get(id);

    if (room) {
      this.rooms.filter((room) => room.id !== id);
    }

    return room;
  }
}

module.exports = () => {
  return new Rooms();
}
