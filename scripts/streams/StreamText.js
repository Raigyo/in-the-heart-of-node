// Module StreamText: class heritating from readable

const { Readable } = require("stream");

class StreamText extends Readable {
  constructor(text) {
    super();
    this.text = text;
    this.sentences = text.split("\n");
  }

  _read() {
    this.sentences.map((data) => {
      this.push(data);
    });
    this.push(null);
  }
} // \ class

module.exports = StreamText;
