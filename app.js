const express = require("express");
const app = express();
const PORT = 8008


app.get("/", (req, res)=>{
    res.send("Hello world!")
})


app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})