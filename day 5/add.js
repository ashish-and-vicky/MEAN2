const Promise = require("bluebird");
const mysql = require("mysql");
const dbconnect = require("./con");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);




const connection = async () => {
    try {
        const connect = mysqli.createConnection(dbconnect);
        await connect.connectAsync();
        await connect.endAsync();
        console.log("connected");
    } catch (error) {
        console.log("not");
    }
}





const database = async (input) => {
    try {
        const con = mysql.createConnection(DB_CONFIG);
        await con.connectAsync();

        let sql = "insert into user(username,mobile) values(?,?)";
        await con.queryAsync(sql, [
            input.username,
            input.password,
        ])
        console.log("data inserted");
        await con.endAsync();

    } catch (error) {
        console.log("error");
    }
}

const update = async (input) => {
    const con = mysql.createConnection(DB_CONFIG);
    await con.connectAsync();

    let sql = "update user set username=? where mobile=?";
    const run = await con.queryAsync(sql, [
        input.username,
        input.mobile
    ])
    await con.endAsync();
}
const del = async (input) => {
    const con = mysql.createConnection(DB_CONFIG);
    await con.connectAsync();

    let sql = "delete from user where username = ?";
    const dele = await con.queryAsync(sql, [
        input.username
    ])

    await con.endAsync();
}



module.exports = {
    database,
    update,
    del,
    connection
}
