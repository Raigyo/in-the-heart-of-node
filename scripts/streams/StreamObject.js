// Module StreamText: class heritating from readable

const { Readable } = require("stream");

class StreamObject extends Readable {
  constructor(text) {
    super({ objectMode: true }); // we define object type in constructor
    this.text = text;
    this.sentences = text.split("\n");
  }

  _read() {
    this.sentences.map((data) => {
      const obj = {
        data,
        length: data.length,
      };
      this.push(obj);
    });
    this.push(null);
  }
} // \ class

module.exports = StreamObject;
