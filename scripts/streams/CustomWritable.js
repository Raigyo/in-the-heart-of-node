// Module CustomWritable: class heritating from writable

const { Writable } = require("stream");

class CustomWritable extends Writable {
  _write(chunk, encoding, next) {
    console.log(chunk.toString().trim().toUpperCase());
    next();
  }
} // \ class

module.exports = CustomWritable;
