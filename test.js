// //Load HTTP module (thư viện đã có sẵn khi cài đặt node.js)
// const http = require("http");
// const hostname = "127.0.0.1"; //cái này === http://localhost
// const port = 3000;
// //Create HTTP server and listen on port 3000 for requests
// const server = http.createServer((req, res) => {
// //Set the response HTTP header with HTTP status and Content type
// res.statusCode = 200;
// res.setHeader("Content-Type", "text/plain");
// res.end("Hello World\n Hi DungV");
// });
// //listen for request on port 3000, and as a callback function have the port listened on logged
// server.listen(port, hostname, () => {
// console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})