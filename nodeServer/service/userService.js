const db = require("./../sql/dbConfig");

// 用户登录
exports.login = (req, res, next) => {
    // res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Credentials', 'true'); // 允许服务器端发送Cookie数据
    let loginForm = req.query;
    console.log(loginForm, '===');
    // "SELECT * FROM user WHERE userName='liuta' and passWord='123'"
    let sql = "select * from user where userName='" + loginForm.userName + "'";
    let data = [loginForm.userName];
    db.base(sql, data, (response) => {
        if (response.length == 0) {
            res.json({
                status: "1",
                msg: "没有用户信息"
            })
        } else {
            let sql = "select * from user where userName='" + loginForm.userName + "' AND passWord='" + loginForm.passWord + "' ";
            let data = [loginForm.userName, loginForm.passWord];
            db.base(sql, data, (response) => {
                if (response.length == 0) {
                    res.json({
                        status: "201",
                        msg: "密码有误"
                    })
                } else {
                    res.json({
                        status: "0",
                        msg: "登录成功",
                        result: response
                    })
                }
            })
        }
    })
}
// 注册
exports.register = (req, res, next) => {
    let loginForm = req.query;
    let sql = "insert into user (userName,passWord) values('" + loginForm.userName + "', '" + loginForm.passWord + "')";
    let data = [loginForm.userName, loginForm.passWord];
    db.base(sql, data, (response) => {
        if (response.length == 0) {
            res.json({
                status: "201",
                msg: "注册失败"
            })
        } else {
            res.json({
                status: "0",
                msg: "注册登录成功",
                result: response
            })
        }
    })
}
