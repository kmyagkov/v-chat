class Rooms {
  constructor() {
    this.rooms = [];
  }

  add(room) {
    this.rooms.push(room);
  }

  get(name) {
    return this.rooms.find((room) => room.name === name);
  }

  getAll() {
    return this.rooms;
  }

  remove(name) {
    const room = this.get(name);

    if (room) {
      this.rooms.filter((room) => room.name !== room);
    }

    return room;
  }
}

module.exports = () => {
  return new Rooms();
}
