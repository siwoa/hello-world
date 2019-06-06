// 封装操作数据库的通用api
const mysql = require("mysql");
exports.base = (sql, data, callback) => {
    // 创建数据库连接
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "admin",
        database: "iu"
    })
    // 执行连接操作
    connection.connect();
    // 操作数据库（异步）
    connection.query(sql, data, (error, results, fields) => {
        // console.log(data);
        if (error) throw error;
        callback(results);
        console.log("数据库连接成功！", results);
    })
    // 关闭数据库
    connection.end();
}
