var event = require('events');
var emitter = new event.EventEmitter();

emitter.on('firstEvent', () => console.log('first emitter'));
emitter.emit('firstEvent');

emitter.on('secondEvent', (msg) => console.log(`second emitter with message ${msg}`));
emitter.emit('secondEvent', 'you ran second emitter');
