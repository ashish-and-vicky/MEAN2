const Promise = require("bluebird");
const mysql = require("mysql");
const express = require("express");
const app = express();
const add = require("./adduser");
const {
    json
} = require("express");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);


app.get('/adduser', (req, res) => {

    const input = req.query;
    add.database(input);
    const json = {
        message: "Data inserted"
    };
    res.json(json);
})


app.get('/update', async (req, res) => {
    const input = req.query;
    add.update(input);
    const json = {
        message: "data updated"
    };
    res.json(json);
})

app.get('/delete', async (req, res) => {
    const input = req.query;
    add.del(input);
    const json = {
        message: "data is deleted"
    };
    res.json(json);
})

app.listen(3020);