// Video server without streams

const http = require("http");
const fs = require("fs");
const videoPath = "./video/sample_1920x1080.mp4";

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/favicon") return;
  if (req.url === "/contact") {
    memoryUsageInMegaBytes(`route ${req.url}`);
    res.end("Contact us");
  } else if (req.url === "/video") {
    // fs.readFile: load all the video in memory
    fs.readFile(videoPath, (error, data) => {
      memoryUsageInMegaBytes(`route ${req.url}`);
      if (error) {
        console.log(`fail: ${error.message}`);
      }
      res.writeHead(200, { "content-type": "video/mp4" });
      res.end(data);
    });
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
==== route /video start ====
rss 103.91 Mb
heapTotal 4.68 Mb
heapUsed 2.67 Mb
external 74.09 Mb
arrayBuffers 72.96 Mb
==== route /video end ====
*/
