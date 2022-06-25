const CHECKUSER = ({email = '',password = ''})=>{
    return {
        sql:"select * from user where email = ? and password = ?",
        value:[email,password]
    }
}

const INSERTUSER = ({ email = "", password = "", birthday = new Date(1900, 1, 1), phone = '', address = '', name = '', type = 'client',refreshtoken = '' })=>{
    return {
        sql:"insert into user (email,password,birthday,phone,address,name,type,refreshtoken) values (?,?,?,?,?,?,?,?)",
        value:[email,password,birthday.toLocaleDateString('en-CA'),phone,address,name,type,refreshtoken]
    }
}

module.exports = {
    CHECKUSER,
    INSERTUSER
}