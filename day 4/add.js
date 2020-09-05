const Promise = require("bluebird");
const mysql = require("mysql");
const data = require("./con");
const path = require("path");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

console.log(__filename());

let database = async ()=>{

        const con = mysql.createConnection(data.DB_CONFIG);
        await con.connectAsync();
        let sql = "insert into user(username,password,email,mobile)values(?,?,?,?)";

        let op = await con.queryAsync(sql,[
            "mayur zope","4578","mayur@gmail.com","8554872021"
        ]);

        await con.endAsync();
        return op;
    }
    

database();
module.exports={
    database
}
