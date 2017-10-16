## SocketIO Manual
> คู่มือการใช้งาน Socket.io ฉบับ YoProgrammer

## Table of Contents
- [Create Server](#create-server)
- [Create Client](#create-client)
- Server Event
  - io.on('connection')(socket => {})
    - socket.id
    - socket.emit()
    - socket.broadcast.emit()
    - socket.on() # send callback ext. socket.on('event', (msg, cb) => {cb()})
      - io.emit()
      - socket.join()
        - socket.emit()
        - io.to().emit()
        - socket.broadcast.to().emit()
      - socket.leave()
- Client Event
  - socket.on('connect')
  - socket.on('disconnect)
  - socket.on()
  - socket.emit() # recive callback ext. socket.emit({}, function(){})

## Create Server
```javascript
const express = require('express')
const http = require('http')
const path = require('path')
const socketIO = require('socket.io')

const app = express()

const server = http.createServer(app);
const io = socketIO(server)

io.on('connection', socket => {
  console.log('New user connect')

  socket.on('disconnect', () => {
    console.log('User was disconnected')
  })
})

app.use(express.static(path.join(__dirname, '..', 'public')))

const PORT = process.env.PORT || 3000
server.listen(PORT)
console.log(`Server is up on ${PORT}`)
```

## Create Client
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Socket.io</title>
</head>
<body>
  Hello
  <script src="/socket.io/socket.io.js"></script>
  <script>
    const socket = io()
    socket.on('connect', () => {
      console.log('Connect to server')
    })

    socket.on('disconnect', () => {
      console.log('Disconnect from server')
    })
  </script>
</body>
</html>
```