const express = require("express");
const add = require("./add");
const readAllUser = require("./readuser");
const app = express();

app.get("/", async (req,res)=>{
    const input = req.query;
    await add.add(input);

    const json = { message: "Success" };
    res.json(json);
 
});

app.get("/user",async (req,res)=>{
    try {
        const results = await readAllUser.read();
        res.json(results);
      } catch (err) {
        const json = { message: "Failure" };
        res.json(json);
      }
});
app.listen(3000);

