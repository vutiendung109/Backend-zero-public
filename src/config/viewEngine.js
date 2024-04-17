const path = require('path') // khai báo thư viện liên quan đến đường dẫn dùng trong câu lệnh này app.set('views', path.join(__dirname,'views'))
const express = require('express')

const configViewEngine = (app) => {
    app.set('views', path.join(__dirname,'../views/')) // tự động tìm đến thư mục view ở vị trí thư mục đang đứng
    app.set('view engine', 'ejs')

    app.use( express.static(path.join(__dirname, '../public')))
}


// export hàm configViewEngine
module.exports = configViewEngine;