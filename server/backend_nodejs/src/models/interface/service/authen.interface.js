class ILogin_DBInput{
    constructor({ email = '', password = ''}){
        this.email = email;
        this.password = password;
    }
}

class IRegister_DBInput{
    constructor({ email = "", password = "", birthday = new Date(1900, 1, 1), phone = '', address = '', name = '', type = 'client', refreshtoken = '' }){
        this.email = email;
        this.password = password;
        this.birthday = birthday;
        this.phone = phone;
        this.address = address;
        this.name = name;
        this.type = type;
        this.refreshtoken = refreshtoken;
    }
}

module.exports = {
    ILogin_DBInput,
    IRegister_DBInput
}