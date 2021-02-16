const EventEmitter = require("events").EventEmitter;

class ShoppingList extends EventEmitter {
  constructor() {
    super();
    this.list = [];
  }
  // emit event "added" then the list of items
  add(item) {
    this.emit("added", this.list);
    if (item.includes("frozen")) {
      this.emit("bringFreezerBag", "bring freezer bag!");
    }
    if (item.includes("computer")) {
      this.emit("error", new Error("Sorry we only sell food!"));
      return;
    }
    this.list = [...this.list, item];
  }
}

module.exports = ShoppingList;
