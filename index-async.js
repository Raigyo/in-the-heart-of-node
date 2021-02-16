// SYNCHRONOUS / ASYNCHRONOUS

const synchronous = require("./synchronicity/synchronous");
const asynchronous = require("./synchronicity/asynchronous_1");
const promises = require("./synchronicity/promises");

// Variables scope
console.log("----------");
console.log(`Var name: ${synchronous.name}`); // return Undefined
console.log(`Var age: ${synchronous.age}`); // return 20
console.log(`Var language: ${global.language}`); // return "English" - FYI - DO NOT use global var

// Synchronous - everything is axecuted sequentialy in the main thread
console.log("----------");
console.log("Sync: Before getRandomNumberSync");
const resultRandom = synchronous.getRandomNumberSync(20);
console.log(`random number: ${resultRandom}`);
console.log("Sync: After getRandomNumberSync");

console.log("Sync: Before addSync");
const resultAdd = synchronous.addSync(20, 30);
console.log(`total: ${resultAdd}`);
console.log("Sync: After addSync");

/* Return:
Sync: Before getRandomNumberSync
random number: 11
Sync: After getRandomNumberSync
Sync: Before addSync
total: 50
Sync: After addSync
*/

// SetIntervall
console.log("----------");
console.log("Before setInterval");
let i = 0;
const handle = setInterval(() => {
  console.log("SetIntervall: Before getRandomNumberSync");
  const resultRandom = synchronous.getRandomNumberSync(20);
  console.log(`random number: ${resultRandom}`);
  console.log("SetIntervall: After getRandomNumberSync");
  i++;
  if (i === 10) {
    clearInterval(handle);
    console.log("Interval finished");
  }
}, 50);
console.log("After setInterval");
console.log("Main thread not blocked");

/* Return:
Before setInterval
After setInterval
Main thread not blocked
Before getRandomNumberSync
random number: 17
After getRandomNumberSync
//...
*/

// Callback: sync
console.log("----------");
console.log("Callback sync: Before getRandomNumberCallbackSync");
synchronous.getRandomNumberCallbackSync(5, (err, res) => {
  if (err) throw err; // throws a user-defined exception: stops or sends to catch
  console.log(`generated number by getRandomNumberCallbackSync: ${res}`);
});
console.log("Callback sync: After getRandomNumberCallbackSync");

/* Return:
Callback sync: Before getRandomNumberCallbackSync
generated number by getRandomNumberCallbackSync: 4
Callback sync: After getRandomNumberCallbackSync
*/

// Callback: async
console.log("----------");
console.log("Callback async: Before getRandomNumber");
asynchronous.getRandomNumber(5, (err, res) => {
  if (err) throw err; // throws a user-defined exception: stops or sends to catch
  console.log(`generated number by getRandomNumber: ${res}`);
});
console.log("Callback async: After getRandomNumber");

/* Return:
Callback async: Before getRandomNumber
Callback async: After getRandomNumber
generated number by getRandomNumber: 0
*/

/* If we use:
asynchronous.getRandomNumber("string", (err, res) => {
Return:
Error: Use integer!
*/

console.log("Callback async: Before getAdd");
asynchronous.getAdd(5, 2, (err, res) => {
  if (err) throw err; // throws a user-defined exception: stops or sends to catch
  console.log(`generated number by getAdd: ${res}`);
});
console.log("Callback async: After getAdd");

/* Return:
Callback async: Before getAdd
Callback async: After getAdd
generated number by getAdd: 7
*/

// Promises
console.log("----------");
console.log("promises: Before getRandomNumber");
promises
  .getRandomNumber(10)
  .then((data) => console.log(`generated number by promise: ${data}`))
  .catch((error) => console.log(`error: ${error.message}`));
console.log("promises: After getRandomNumber");

/* Return:
promises: Before getRandomNumber
promises: After getRandomNumber
generated number by promise: 3
*/
