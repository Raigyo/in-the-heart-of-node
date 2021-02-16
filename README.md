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