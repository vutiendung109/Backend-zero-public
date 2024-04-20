const mysql = require('mysql2')
require('dotenv').config() // Khai báo dotenv , dùng dotenv thì các biến trong file .env mới dùng được

      // Create the connection to database
      const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT, // default 3306
        user: process.env.USER,
        password:process.env.PASSWORD,
        database: process.env.DB_NAME,
      });


      module.exports = connection;