var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "iu"
});

connection.connect();

connection.query("SELECT * FROM user WHERE userName='liuta' and passWord='123'", (error, results, fields) => {
    if(error) throw error;
    console.log("数据库连接成功",results);
})