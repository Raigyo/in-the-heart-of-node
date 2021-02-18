const myStreamText = require("./scripts/streams/StreamText");
const myCustomWritable = require("./scripts/streams/CustomWritable");

const text = `Lorem ipsum
dolor sit
amet.`;

// instance from class CustomWritable
const stream = new myStreamText(text);
stream.on("data", (chunk) => console.log(chunk.toString()));
stream.on("end", () => console.log("Finished reading"));

// instance from class CustomWritable
const cw = new myCustomWritable();
stream.pipe(cw);
