# Node.js

*February 2021*

> 🔨 Node main concepts overview. From udemy '[Au coeur de Node](https://www.udemy.com/course/au-coeur-de-nodejs/)'.

![Node Logo](_readme-img/node-js-logo.jpg)

## SYNCHRONOUS / ASYNCHRONOUS

Asynchronous I/O is a form of input/output processing that permits other processing to continue before the transmission has finished.

````
scripts
-- synchronicity
---- asynchronous_1.js
---- promises
---- synchronous
index-async.js
````
`nodemon index-async.js`

- Variables scope
- Synchronous functions
- SetIntervall
- Callbacks sync and async using setTimeout
- Promises

Do not slow down the call stack!

- Use async operations
- Use events emitter

![node-cycle](_readme-img/node-cycle.png)

## EVENT EMITTER / CUSTOM EVENTS

EventEmitter is a class that helps us create a publisher-subscriber pattern in NodeJS. With an event emitter, we can simply raise a new event from a different part of an application, and a listener will listen to the raised event and have some action performed for the event.

````
scripts
-- events
---- ShoppingList.js
index-emitter.js
````

`nodemon index-emitter.js`

- Handler / Emitter
- Custom events
- Handler using class that inherits emitter
- Functions that return an event emitter

## STREAMS

Streams are one of the fundamental concepts that power Node. js applications. They are data-handling method and are used to read or write input into output sequentially. Streams are a way to handle reading/writing files, network communications, or any kind of end-to-end information exchange in an efficient way.

````
scripts
-- streams
---- bigfile.txt
---- fruits.txt
index-streams.js
````

`nodemon index-streams.js`

- Streams
- Readable stream
- Writable stream
- Process object

## Useful links
- [The Node.js Event Loop, Timers, and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
- [Understanding process.nextTick()](https://nodejs.dev/learn/understanding-process-nexttick)
- [Node.js Documentation - Streams](https://nodejs.org/api/stream.html)
- [Understanding Streams in Node.js](https://nodesource.com/blog/understanding-streams-in-nodejs/)
- [Node.js file streams explained!](https://areknawo.com/node-js-file-streams-explained/)