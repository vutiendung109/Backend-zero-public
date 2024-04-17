const express = require('express')
const router = express.Router()


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

router.get('/', (req, res) => {
    res.send('Hello World! with Dung')
  })
  
router.get('/dung', (req, res) => {
      // res.send('Hello Dung!')
      res.render('sample.ejs')
})
    
router.get('/dungvt', (req, res) => {
      const user = {
        name: 'Vũ Tiến Dũng',
        age: 22,
        city: 'NTD'
    };
    res.render('sample.ejs', { user: user });
})

//export
module.exports = router; // express default