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

// pipe: from keyboard (read) to screen (write)
// pipe manage bad pressure
process.stdin.pipe(process.stdout);

createReadStream("./scripts/streams/fruits.txt").pipe(process.stdout); // display content of fruits.txt
const myWriteStream = createWriteStream("./scripts/streams/fruits_copy2.txt");
process.stdin.pipe(myWriteStream); // write in fruits_copy2.txt

console.log(process.argv);
// createReadStream(process.argv[2]).pipe(process.stdout);
// nodemon streams.js fruits.txt
// => content of fruits.txt

// "back pressure" management (when a stream is too quick)
const myReadSream = createReadStream("./scripts/streams/bigfile.txt");
const myWriteSream = createWriteStream("./scripts/streams/bigfile_copy.txt", {
  highWaterMark: 512, // determines how large the buffer should be for storing data
});

let nbOfpauses = 0;
myReadSream.on("data", (chunk) => {
  const isReadyToWriteMoreData = myWriteSream.write(chunk);
  if (!isReadyToWriteMoreData) {
    nbOfpauses++;
    console.log("To much data pushed: paused ", nbOfpauses);
    myReadSream.pause();
  }
});

myWriteSream.on("drain", () => {
  console.log("ready again to push datas: resume");
  myReadSream.resume();
});
