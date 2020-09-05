const fs = require("fs");
const path = require("path");
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/createrepo', async (req, res) => {
    const name = req.body;
    console.log(name);
    const test = name.name;
    console.log(test);
    fs.mkdir(path.join(__dirname, test), {}, err => {
        if (err) throw err;
        console.log("Folder created");
        res.send('1');

    })

});


app.listen(3000);
