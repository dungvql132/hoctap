class ResponeAuthentication {
    constructor({ accesstoken = '', refreshtoken = '', message = '' }) {
        this.accesstoken = accesstoken;
        this.refreshtoken = refreshtoken;
        this.message = message;
    }
}

module.exports = {
    ResponeAuthentication
}