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
require('dotenv').config() // Khai báo dotenv
const path = require('path') // khai báo thư viện liên quan đến đường dẫn dùng trong câu lệnh này app.set('views', path.join(__dirname,'views'))
const app = express()
// console.log('env check : ' , process.env)

const port = process.env.port || 8080

// Config template engine ejs
app.set('views', path.join(__dirname,'views')) // tự động tìm đến thư mục view ở vị trí thư mục đang đứng
app.set('view engine', 'ejs')

//config static files trong thư mục public
// app.use(express.static('public')) -> sai
// app.use('/static', express.static(path.join(__dirname, 'public'))) -> sai
app.use( express.static(path.join(__dirname, 'public')))
//routes
app.get('/', (req, res) => {
  res.send('Hello World! with Dung')
})

app.get('/dung', (req, res) => {
    // res.send('Hello Dung!')
    res.render('sample.ejs')
  })
  
  app.get('/dungvt', (req, res) => {
    const user = {
      name: 'Vũ Tiến Dũng',
      age: 22,
      city: 'NTD'
  };
  res.render('sample.ejs', { user: user });
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})