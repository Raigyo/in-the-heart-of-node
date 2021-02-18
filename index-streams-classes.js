const myStreamText = require("./scripts/streams/StreamText");
const myStreamObject = require("./scripts/streams/StreamObject");
const myCustomWritable = require("./scripts/streams/CustomWritable");

const text = `Lorem ipsum
dolor sit
amet.`;

// We retrieve buffer / strings
// instance from class CustomWritable
const streamText = new myStreamText(text);
streamText.on("data", (chunk) => console.log(chunk.toString()));
streamText.on("end", () => console.log("Finished reading"));

/* return:
Lorem ipsum
dolor sit
amet.
Finished reading
*/

// instance from class CustomWritable
const cw = new myCustomWritable();
streamText.pipe(cw);

/* return:
LOREM IPSUM
DOLOR SIT
AMET.
Finished reading
*/

// We retrieve objects
// instance from class CustomWritable
const streamObject = new myStreamObject(text);
streamObject.on("data", (chunk) => console.log(JSON.stringify(chunk)));
streamObject.on("end", () => console.log("Finished reading"));

/* return:
{"data":"Lorem ipsum","length":11}
{"data":"dolor sit","length":9}
{"data":"amet.","length":5}
*/
