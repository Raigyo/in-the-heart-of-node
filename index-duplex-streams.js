const slugify = require("./scripts/duplex/Slugify");
const { createReadStream, createWriteStream } = require("fs");
const { PassThrough } = require("stream");
const net = require("net");

// Duplex stream using transform
const mySlug = new slugify();
// transformed readable datas piped to a writable stream
process.stdin.pipe(mySlug).pipe(process.stdout);

// slug url test
// return: slug-url-test
// ctrl+d (linux)
// return: Bye bye! (flush method)

// ------

const myPassThrough = new PassThrough();
const myReadStream = createReadStream("./scripts/duplex/bigfile.txt");

let total = 0;
// PassThrough heritate from Transform stream
myPassThrough.on("data", (chunk) => {
  total += chunk.length;
  console.log(`${total} bytes`);
});
// after the first pipe passtrough is writable
// before the second pipe passtrough is readable
// readable => writable / readable => writable
myReadStream.pipe(myPassThrough).pipe(process.stdout);

// ------

// Server that resend all datas we send to it (echo)
// Tip: on the right of pipe: writable / on the left: readable

net
  .createServer((stream) => {
    stream.pipe(stream);
  })
  .listen(5000);

/*
=>   nc localhost 5000
test
return: test
*/
