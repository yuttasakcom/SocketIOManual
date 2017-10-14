const express = require('express')
const http = require('http')
const path = require('path')
const socketIO = require('socket.io')

const app = express()

const server = http.createServer(app);
const io = socketIO(server)

io.on('connection', socket => {
  console.log('New user connect')

  socket.emit('newEmail', {
    from: 'yo',
    text: 'Hello',
    createAt: 123,
  })

  socket.on('createMessage', msg => {
    console.log('createMessage', msg)
    io.emit('newMessage', {
      from: msg.from,
      text: msg.text,
      createdAt: new Date().getTime(),
    })
  })

  socket.on('disconnect', () => {
    console.log('User was disconnected')
  })
})

app.use(express.static(path.join(__dirname, '..', 'public')))

const PORT = process.env.PORT || 3000
server.listen(PORT)
console.log(`Server is up on ${PORT}`)