// const express = require('express');
import express from "express";

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.write("Hello World! \n");
    var flag = 0;
    var interval = setInterval(() => {
        if (flag < 5) {
            flag++;
            res.write(`{flag: ${flag}, data: ${(Math.random()*1000).toFixed(0)}, time: ${Date().toString().slice(0, 24) + "\n"}}`);
            // res.write(`${{flag: flag, data: (Math.random()*1000).toFixed(0) }}`);
            // console.log(`flag: ${flag} `);
        } else {
            res.end('Response ends here!');
            clearInterval(interval)
        }
    }, 1000);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});