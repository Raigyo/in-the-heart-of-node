// Video server with streams

const http = require("http");
const { createReadStream } = require("fs");
const videoPath = "./video/sample_1920x1080.mp4";

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/favicon") return;
  if (req.url === "/contact") {
    memoryUsageInMegaBytes(`route ${req.url}`);
    res.end("Contact us");
  } else if (req.url === "/video") {
    const myReadStream = createReadStream(videoPath);
    res.writeHead(200, { "content-type": "video/mp4" });
    myReadStream.pipe(res); // we pipe the stream to results
    memoryUsageInMegaBytes(`Route ${req.url}`);
  } else {
    res.end(`On the page ${req.url}`);
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server on port ${port}`);
});

const memoryUsageInMegaBytes = (pageUrl) => {
  const used = process.memoryUsage();
  console.log(`==== ${pageUrl} start ====`);
  for (let key in used) {
    console.log(
      `${key} ${Math.round((used[key] / 1024 / 1024) * 100) / 100} Mb`
    );
  }
  console.log(`==== ${pageUrl} end ====\n\n`);
};

/* return:
==== Route /video start ====
rss 51.04 Mb
heapTotal 4.73 Mb
heapUsed 3.19 Mb
external 10.08 Mb
arrayBuffers 8.95 Mb
==== Route /video end ====
*/
