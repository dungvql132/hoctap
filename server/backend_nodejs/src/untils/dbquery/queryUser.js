const { ILogin_DBInput, IRegister_DBInput } = require("@src/models/interface/service/authen.interface")

const MAKE_QUERY_CHECKUSER = (dbInput = new ILogin_DBInput()) => {
    const { email, password } = new ILogin_DBInput(dbInput);
    return {
        sql: "select * from user where email = ? and password = ?",
        value: [email, password]
    }
}

const MAKE_QUERY_INSERTUSER = (dbInput = new IRegister_DBInput()) => {
    const { email, password, birthday, phone, address, name, type, refreshtoken } = dbInput
    return {
        sql: "insert into user (email,password,birthday,phone,address,name,type,refreshtoken) values (?,?,?,?,?,?,?,?)",
        value: [email, password, birthday.toLocaleDateString('en-CA'), phone, address, name, type, refreshtoken]
    }
}

const MAKE_QUERY_GETALLUSER = () => {
    return {
        sql: "select * from user",
        value: []
    }
}

module.exports = {
    MAKE_QUERY_CHECKUSER,
    MAKE_QUERY_INSERTUSER,
    MAKE_QUERY_GETALLUSER
}