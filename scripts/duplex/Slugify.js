const { Transform } = require("stream");

class Slugify extends Transform {
  // we transform the readable chain
  _transform(chunk, encoding, next) {
    const slug = chunk.toString().trim().replace(/\s+/g, "-");
    // all spaces occurencies replaced by "-"
    this.push(slug + "\n");
    next();
  }
  // we can add datas using flush
  _flush(next) {
    console.log("Bye bye!");
  }
} // class

module.exports = Slugify;
