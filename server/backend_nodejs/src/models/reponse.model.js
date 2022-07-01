class ResponseAuthentication {
    constructor({ accesstoken = '', refreshtoken = '', message = '' }) {
        this.accesstoken = accesstoken;
        this.refreshtoken = refreshtoken;
        this.message = message;
    }
}

class ResponseDefault {
    constructor({ data = '', message = '' }) {
        this.data = data;
        this.message = message;
    }
}

module.exports = {
    ResponseAuthentication,
    ResponseDefault
}