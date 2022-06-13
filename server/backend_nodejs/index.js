console.log("backend by nodejs");

// var mysql = require('mysql');

const {PrismaClient} = require("@prisma/client")

const prisma = new PrismaClient()
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "123456",
//   port:"3306",
//   database:"webeng",
//   insecureAuth : true
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// let sql = "SELECT * FROM user;"

// con.query(sql, function(err, results) {
//     if (err) throw err;
//     console.log(results);
//   });

const posts = prisma.user.findMany({}).then((rs)=>{
    console.log(rs);
})