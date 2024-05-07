const express = require('express')
const router = express.Router()
const {getHome, getdung,getdungvt,postCreateUser,getCreate ,getUpdateUser,postUpdateUser,postDeleteUser,postHandelRemoveUser} = require('../controllers/homeController')


// app.get('/', (req, res) => {
//     res.send('Hello World! with Dung')
//   })
  
// app.get('/dung', (req, res) => {
//       // res.send('Hello Dung!')
//       res.render('sample.ejs')
// })
    
// app.get('/dungv', (req, res) => {
//       const user = {
//         name: 'Vũ Tiến Dũng',
//         age: 22,
//         city: 'NTD'
//     };
//     res.render('sample.ejs', { user: user });
// })


//chuyển hết từ app.get -> router.get


//Trước khi bỏ bớt code sang controller
// router.get('/', (req, res) => {
//     res.send('Hello World! with Dung')
//   })
  
// router.get('/dung', (req, res) => {
//       // res.send('Hello Dung!')
//       res.render('sample.ejs')
// })
    
// router.get('/dungvt', (req, res) => {
//       const user = {
//         name: 'Vũ Tiến Dũng',
//         age: 22,
//         city: 'NTD'
//     };
//     res.render('sample.ejs', { user: user });
// })



//Sau khi để controller xử lí logic
//router.Method('/route', handler)
router.get('/', getHome)

router.get('/dung',getdung )
  
router.get('/dungvt',getdungvt)

router.get('/create',getCreate)
router.post('/create-user',postCreateUser)
router.get('/update/:idd',getUpdateUser) //Route param giúp lấy động thông tin tham số
router.post('/update-user',postUpdateUser)
router.post('/delete-user/:id',postDeleteUser)
router.post('/delete-user',postHandelRemoveUser)


//export
module.exports = router; // express default