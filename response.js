// const http = require("http");
import http from "http";
const url = "http://localhost:3000";

http.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    // body += data;
    console.log("chunk: ", data);
  });
  res.on("end", () => {
    // body = JSON.parse(body);
    // console.log(body);
    console.log("data end!");
  });
});