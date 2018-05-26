let http = require("http");

let server = http.createServer((req, res) => {
  res.writeHead(200, {
    "content-Type": "text/plain"
  });
  res.write("Hello World xxx");
  res.end();
});

server.listen(3000, () => {
  console.log("Server started at port 3000");
});
