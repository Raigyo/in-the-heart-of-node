// Module Streams

// Factory patterns
// const createReadStream = require("fs").createReadStream;
// const createWriteStream = require("fs").createWriteStream;
// Destructuring
const { createReadStream, createWriteStream } = require("fs");

// Readable stream
const readable = createReadStream("./scripts/streams/fruits.txt");
// event emitter listen to event data (provided by stream)
readable.on("data", (chunk) => {
  // console.log(chunk); // return buffer
  console.log(chunk.toString());
});

readable.on("end", () => {
  console.log("File read");
});

// Writable stream

const readStream = createReadStream("./scripts/streams/fruits.txt");
const writeStream = createWriteStream("./scripts/streams/fruits_copy.txt");

// we read the content of a file, create a file and copy the content in it
readStream.on("data", (chunk) => {
  writeStream.write(chunk);
});

readStream.on("error", (error) => {
  console.log(`Error: ${error.message}`);
  console.log("----------");
});

readStream.on("end", () => {
  writeStream.end();
  console.log("----------");
  console.log("File copied");
});

// Writable stream big file
const writeStreamBigFile = createWriteStream("./scripts/streams/bigfile.txt");
for (let i = 0; i <= 1e5; i++) {
  writeStreamBigFile.write(`${i} - added content\n`);
}

writeStreamBigFile.end(() => {
  console.log("Big file created");
});

// pipe from keyboard (read) to screen (write)
process.stdin.pipe(process.stdout);

createReadStream("./scripts/streams/fruits.txt").pipe(process.stdout);

console.log(process.argv);
// createReadStream(process.argv[2]).pipe(process.stdout);
// nodemon streams.js fruits.txt
// => content of fruits.txt
