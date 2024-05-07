const connection = require('../config/database')

const getAllUsers = async () =>{
    let [results, fields] = await connection.query('select * from Users');
    return results;
}
const getUserById = async (userId) =>{
    let [results, fields] = await connection.query('select * from Users where id =?',[userId]);
    let user =results && results.length >0 ? results[0] : {} ;// đúng thì trả về giá trị đầu tiên của results
    return user;
}

const updateUserById =async (email,city,name,id) =>{
    let [results,fields] = await connection.query(
       
        `UPDATE Users
        SET email = ?, city= ?,name= ?
        WHERE id = ?;`,
          [email,city,name,id],

    )

}

const deleteUserByID = async (id) =>{
    let [results,fields] = await connection.query(
        'DELETE FROM Users  WHERE id=?',
          [id]

    ) 
}
module.exports={
    getAllUsers, getUserById,updateUserById,deleteUserByID
}