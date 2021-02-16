const EventEmitter = require("events").EventEmitter; // package event
const ShoppingList = require("./scripts/events/ShoppingList");

const programmer = new EventEmitter(); // constructor

let energy = 5;
let insomniaRisk = 0;

// Handler
/* We create a custom event and associate callback to the ".on" method */
programmer.on("drinkCoffee", function () {
  console.log("Boost");
});

// we can create several custom events with the same name
programmer.on("drinkCoffee", function (coffee = "black coffee") {
  console.log(`Energy increase after drinking ${coffee}: ${++energy}`);
});

const increaseInsomnia = () => {
  insomniaRisk++;
  console.log(`Insomnia risk raised to level: ${++insomniaRisk}`);
};

programmer.on("drinkCoffee", increaseInsomnia);

// programmer.on("drinkCoffee", function () {
//   console.log(`Insomnia risk: ${++insomniaRisk}`);
// });

// Emitter
programmer.emit("drinkCoffee");
programmer.emit("drinkCoffee", "brazilian coffee");
programmer.emit("drinkCoffee");

console.log("--------");

// Handler using class that inherits Emitter

const myShoppingList = new ShoppingList();

myShoppingList.on("added", (list) => {
  console.log(`Total list: ${list}`);
});

// If "frozen", the event "bringFreezerBag" is emitted:
// myShoppingList.on("bringFreezerBag", (list) => {
//   console.log(`Warning: ${list}`);
// });
// We can use the method ".once" so the event will be launched only once
myShoppingList.once("bringFreezerBag", (list) => {
  console.log(`Warning: ${list}`);
});

// We manage the error
myShoppingList.once("error", (error) => {
  console.log(`${error}`);
});

myShoppingList.add("camembert");
myShoppingList.add("frozen vegetables");
myShoppingList.add("frozen fishes");
myShoppingList.add("computer");
myShoppingList.add("chocolate");

// Functions that return an event emitter

console.log("--------");

const getBook = () => {
  const ee = new EventEmitter();
  ee.emit("searchbookStarted");
  const searchDuration = Math.floor(Math.random() * 5 * 1000);
  setTimeout(() => {
    const book = { title: "Book title", author: "Author of the book" };
    ee.emit("bookFound", book);
  }, searchDuration);
  return ee;
};

const desiredBook = getBook();

desiredBook.on("searchDuration", () => {
  console.log("book search has begun!");
});

desiredBook.on("bookFound", (data) => {
  console.log(`Book found ${JSON.stringify(data)}`);
});
