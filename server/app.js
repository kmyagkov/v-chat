const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const users = require('./users')();
const rooms = require('./rooms')();

const message = (name, text, id) => ({name, text, id});

io.on('connection', (socket) => {
  socket.on('init', (cb) => {
    cb(rooms.getAll());
  });

  socket.on('userJoined', ({user, room}, cb) => {
    if (!user || !room) {
      return cb('Incorrect user data');
    }

    socket.join(room, () => {
      const ioRoom = io.sockets.adapter.rooms[room];

      if (ioRoom && !rooms.get(room)) {
        rooms.add({
          name: room
        });
      }
    });

    users.remove(socket.id);
    users.add({
      id: socket.id,
      name: user,
      room
    });

    cb({userId: socket.id});

    io.to(room).emit('updateUsers', users.getByRoom(room));
    socket.emit('newMessage', message('system', `Welcome ${user}`));
    socket.broadcast
      .to(room)
      .emit('newMessage', message('system', `${user} joined room`));
  });

  socket.on('createMessage', ({id, text}, cb) => {
    if (!text) {
      cb('Message is empty')
    }

    const user = users.get(id);
    if (user) {
      io.to(user.room).emit('newMessage', message(user.name, text, id));
    }

    cb();
  });

  socket.on('userLeft', (id, cb) => {
    const user = users.remove(id);
    if (user) {
      io.to(user.room).emit('newMessage', message('system', `User ${user.name} leave chat`));
    }
    cb();
  });

  socket.on('disconnect', () => {
    const user = users.remove(socket.id);
    if (user) {
      io.to(user.room).emit('updateUsers', users.getByRoom(user.room));
      io.to(user.room).emit('newMessage', message('system', `User ${user.name} leave chat`));
    }
  })
});

module.exports = {
  app,
  server
};
