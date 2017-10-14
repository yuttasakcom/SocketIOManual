## SocketIO Manual
> คู่มือการใช้งาน Socket.io ฉบับ YoProgrammer

## Table of Contents
- [Create Server](#create-server)
- [Create Client](#create-client)

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
  </script>
</body>
</html>
```