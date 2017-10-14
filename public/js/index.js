const socket = io()
socket.on('connect', () => {
  console.log('Connect to server')

  socket.emit('createMessage', {
    from: 'Yo',
    text: 'createMessage',
  })
})

socket.on('disconnect', () => {
  console.log('Disconnect from server')
})

socket.on('newMessage', msg => {
  console.log('newMessage', msg)
})