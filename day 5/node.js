const Promise = require("bluebird");
const mysql = require("mysql");
const add = require("./1");
const dbadd = require("./adduser");
const express = require("express");
const app = express();
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

// app.get('/',(req,res)=>{
//     const add1 = add.database();
//     const json = {message:"DONE"};
//     res.json(json);
// });

app.get('/', (req, res) => {
    const add1 = add.connection;
    const json = {
        message: "DONE"
    };
    res.json(json);
});


app.get('/adduser', (req, res) => {
    const input = req.query;
    dbadd.database(input);
    res.json({
        message: "success"
    });
});
app.listen(3000);