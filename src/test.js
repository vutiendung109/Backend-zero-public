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




// require('dotenv').config() // Khai báo dotenv
// const express = require('express')
// const path = require('path') // khai báo thư viện liên quan đến đường dẫn dùng trong câu lệnh này app.set('views', path.join(__dirname,'views'))
// const app = express()
// // console.log('env check : ' , process.env)
// const port = process.env.port || 8080

// // Config template engine ejs
// app.set('views', path.join(__dirname,'views')) // tự động tìm đến thư mục view ở vị trí thư mục đang đứng
// app.set('view engine', 'ejs')

// //config static files trong thư mục public
// // app.use(express.static('public')) -> sai
// // app.use('/static', express.static(path.join(__dirname, 'public'))) -> sai
// app.use( express.static(path.join(__dirname, 'public')))



// //routes
// app.get('/', (req, res) => {
//   res.send('Hello World! with Dung')
// })

// app.get('/dung', (req, res) => {
//     // res.send('Hello Dung!')
//     res.render('sample.ejs')
//   })
  
//   app.get('/dungvt', (req, res) => {
//     const user = {
//       name: 'Vũ Tiến Dũng',
//       age: 22,
//       city: 'NTD'
//   };
//   res.render('sample.ejs', { user: user });
//   })
  

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


      ///// ----- Sau khi áp dụng MVC ----

      require('dotenv').config() // Khai báo dotenv , dùng dotenv thì các biến trong file .env mới dùng được
      const express = require('express')
      const path = require('path') // khai báo thư viện liên quan đến đường dẫn dùng trong câu lệnh này app.set('views', path.join(__dirname,'views'))
      const app = express()
      const mysql = require('mysql2')
      const connection = require('./config/database')

      // Gọi hàm  configViewEngine 
      const configViewEngine = require('./config/viewEngine');
      //?? Gọi router ( ??? Tại sao khi chuyển hết các phần roter sang web.js và chưa gọi lại ở file này nhưng vẫn truy cập được link được -- có thể là brower đã lưu lại web vì sau khi thay đổi link trong web.js (là thay đổi tên các route) nhưng vẫn ko truy cập được vào mà truy cập được vào link cũ)
      const webRouters = require('./routes/web') // thay dôdir tên cx được vì trong file web.js chỉ có 1 tham số là router nên trình duyệt tụ biết


      // console.log('env check : ' , process.env)
      const port = process.env.PORT || 8080

      
      // Config template engine ejs và config static files trong thư mục public
      configViewEngine(app);

       // Khai báo routes
      app.use('/',webRouters)
       
      // const connection = mysql.createConnection({
      //   host: 'localhost',
      //   port: '3307', // default 3306
      //   user: 'root',
      //   password:'123456',
      //   database: 'hoidanit',
      // });
  

// A simple SELECT query
connection.query(
  'SELECT * FROM Users u' ,
  function (err, results, fields) {
    console.log('result: ',results); // results contains rows returned by server
    // console.log('field',fields); // fields contains extra meta data about results, if available
  }
);
      
     
    
        
      
      app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })