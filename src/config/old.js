
require('dotenv').config(); // Khai báo dotenv , dùng dotenv thì các biến trong file .env mới dùng được
const mysql = require('mysql2')
//       Create the connection to database
      const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT, // default 3306
        user: process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });

      //    const connection = mysql.createConnection({
      //   host: 'localhost',
      //   port: '3307', // default 3306
      //   user: 'root',
      //   password:'123456',
      //   database: 'hoidanit',
      // });
  



      module.exports = connection;