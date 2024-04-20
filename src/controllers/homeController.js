
const getHome = (req,res) => {
    //Nếu có xử lý data ở đây thì gọi model
    res.send('Hello World! with Dung')
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


module.exports = {
    getHome,getdung ,getdungvt
}