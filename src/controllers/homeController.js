const connection = require('../config/database')
const {getAllUsers,getUserById,updateUserById,deleteUserByID} = require('../services/CRUDServices')
const getHome = async (req,res) => {
    //Nếu có xử lý data ở đây thì gọi model
    // res.send('Hello World! with Dung')
    
    let results =await getAllUsers();
    return res.render('home.ejs',{listUsers: results})

}

const getdung = (req,res) => {
          // res.send('Hello Dung!')
            res.render('sample.ejs')
}

const getdungvt = (req,res) =>{
    const user = {
        name: 'Vũ Tiến Dũng',
        age: 22,
        city: 'NTD'
    };
    res.render('sample.ejs', { user: user });

}

// const postCreateUser =(req,res) =>{
//     // res.send('create new user')
//     let email = req.body.email;
//     let name = req.body.myname;
//     let city = req.body.city;
//     // let{emai,name,city} =req.body;
//     // console.log("email= " ,email,'name= ',name,'city= ',city)
//     connection.query(
//         'INSERT INTO  Users  (email, name, city) VALUES (?,?,?)',
//         [email, name, city],

//         function (err, results) {
//           console.log(results);
//           res.send('create user succeceed !');
//         }
//       );
// }

const  postCreateUser = async(req,res) =>{
    // res.send('create new user')
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    let [results,fields] = await connection.query(
        'INSERT INTO  Users  (email, name, city) VALUES (?,?,?)',
          [email, name, city],

    )

    console.log('<<<check results' ,results)
    
    res.send('create user succeceed !');
}

const getCreate =(req,res) =>{
    res.render('create.ejs')
}

const getUpdateUser = async (req,res) =>{
    const userId = req.params.idd;
    // console.log('check param',req.params,userId)
    
    
   let user = await getUserById(userId); // nếu không có await ở đây thì hàm getUserById(userId) sẽ trả về rỗng 
    res.render('edit.ejs',{userEdit : user}) //x <- y
}

const  postUpdateUser = async(req,res) =>{
    // res.send('create new user')
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let id = req.body.userId;
    // console.log("email= " ,email,'name= ',name,'city= ',city,"Id",id) // xếp theo thứ tự khai báo : email,..id
     await updateUserById(email,city,name,id);

    // console.log('<<<check results' ,results)
    
    // res.send('update user succeceed !');
    res.redirect('/')
}

const  postDeleteUser = async (req,res) =>{
    const userId = req.params.id;// lưu ý req.params.id thì id là tên phải trùng với tham số truyền động trong route
    // console.log('check param',req.params,userId)
    
    
   let user = await getUserById(userId); // nếu không có await ở đây thì hàm getUserById(userId) sẽ trả về rỗng 
    res.render('delete.ejs',{userEdit : user}) //x <- y
    
    
}
const postHandelRemoveUser = async(req,res) =>{
    const id = req.body.userId;

    await deleteUserByID(id);
    res.redirect('/');
}

module.exports = {
    getHome,getdung ,getdungvt,postCreateUser,getCreate,getUpdateUser,postUpdateUser,postDeleteUser,postHandelRemoveUser
}