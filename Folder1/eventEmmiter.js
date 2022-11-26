const eventEmmiter = require('events')
const customEventEmmitter = new eventEmmiter()
eventEmmiter.on('response',()=>{
    console.log('miretu jaleta')
})
eventEmmiter.emit('response')