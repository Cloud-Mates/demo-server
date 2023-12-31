// const express = require('express');
import express from "express";

const app = express()
const port = 3000


app.use("/static", express.static("public"));

app.get('/', (req, res) => {
    res.header("ngrok-skip-browser-warning", "1");
    res.send("Hello World! \n");
});

app.get('/stream', (req, res) => {
    res.header("ngrok-skip-browser-warning", "1")
    res.write("Hello World! \n");
    var flag = 0;
    var interval = setInterval(() => {
        if (flag < 5) {
            flag++;
            res.write(`{"count": "${flag}", "data": "${Math.floor(1000 + Math.random() * 9000)}", "time": "${Date().toString().slice(0, 24)}"}`);
        } else {
            res.end('Response ends here!');
            clearInterval(interval)
        }
    }, 1000);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});