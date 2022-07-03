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

class ResponsePaging {
    constructor({ data = '', message = '', totalPage = 0 ,totalElement= 0}) {
        this.data = data;
        this.message = message;
        this.totalPage = totalPage;
        this.totalElement = totalElement;
    }
}

module.exports = {
    ResponseAuthentication,
    ResponseDefault,
    ResponsePaging
}