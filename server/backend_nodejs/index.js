console.log("backend by nodejs");
require("module-alias/register")

// let {dung,lan} = require("./untils/constants")
let {dung,lan} = require("@src/untils/constants")
console.log(dung,lan);