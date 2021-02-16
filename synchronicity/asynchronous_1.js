// Module asynchronous

exports.getRandomNumber = (maxValue, callback) => {
  // error first: first argument sent is null, if not null:
  if (typeof maxValue !== "number") {
    return callback(new Error("Use integer!"));
  }
  // we need setTimeout to make the callback async
  setTimeout(() => {
    const result = Math.floor(Math.random() * maxValue);
    callback(null, result);
  }, 2000);
};

exports.getAdd = (firstNumber, secondNumber, callback) => {
  setTimeout(() => {
    const result = firstNumber + secondNumber;
    callback(null, result);
  }, 0);
};
