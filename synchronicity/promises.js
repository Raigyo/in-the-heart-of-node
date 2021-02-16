// Module promise

exports.getRandomNumber = (maxValue) => {
  return new Promise((resolve, reject) => {
    const result = Math.floor(Math.random() * maxValue);
    if (typeof maxValue !== "number") {
      return reject(new Error("Use integer!"));
    }
    resolve(result);
  });
};

// Choice promise or callback

// exports.getRandomNumber = (maxValue, callback) => {
//   if (callback !== undefined) {
//     setTimeout(() => {
//       const result = Math.floor(Math.random() * maxValue);
//       if (typeof maxValue !== "number") {
//         return callback(new Error("Use integer!"));
//       }
//       callback(null, result);
//     }, 0);
//   }
//   return new Promise((resolve, reject) => {
//     const result = Math.floor(Math.random() * maxValue);
//     if (typeof maxValue !== "number") {
//       return reject(new Error("Use integer!"));
//     }
//     resolve(result);
//   });
// };
