// Module synchronous

// Variables scope
const name = "John Doe"; //not exported
exports.age = 20; // exported
global.language = "English"; // exported - FYI -  DO NOT use global var

// We need to export otherwise it's not accessible in other modules
// By convention we have to use suffix "Sync" in function name to know
// that the function could block the thread
exports.getRandomNumberSync = (maxValue) => {
  return Math.floor(Math.random() * maxValue);
};

/*
// Added to:
module {
  exports: {
    getRandomNumberSync(maxValue) { //... }
  }
}
*/

exports.addSync = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber;
};

exports.getRandomNumberCallbackSync = (maxValue, callback) => {
  const result = Math.floor(Math.random() * maxValue);
  // error first: first argument sent is null
  callback(null, result);
};
