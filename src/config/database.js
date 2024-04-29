
require('dotenv').config(); // Khai báo dotenv , dùng dotenv thì các biến trong file .env mới dùng được
const mysql = require('mysql2/promise')
//       Create the connection to database
      // const connection = mysql.createConnection({
      //   host: process.env.DB_HOST,
      //   port: process.env.DB_PORT, // default 3306
      //   user: process.env.DB_USER,
      //   password:process.env.DB_PASSWORD,
      //   database: process.env.DB_NAME,
      // });

      //    const connection = mysql.createConnection({
      //   host: 'localhost',
      //   port: '3307', // default 3306
      //   user: 'root',
      //   password:'123456',
      //   database: 'hoidanit',
      // });
  


      const connection = mysql.createPool({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT, // default 3306
        user: process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database: process.env.DB_NAME,

        waitForConnections: true,
        connectionLimit: 10,//giới hạn 10 lần truy cập cùng lúc
        maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
        idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0,
      });


      module.exports = connection;