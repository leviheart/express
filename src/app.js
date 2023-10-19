const express = require("express");
const data = require("./resData/news.js");
const data1 = require("./resData/detail.js");

const app = express();
// app.use(express.json()) //  body-parser已经在2019年弃用
// app.use(express.urlencoded({ extended: false })) //中间件解析post
// 通过post agent本地测试post接口，get接口可以在浏览器上打印
const port = 3000;

//测试git

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); //*表示可以跨域任何域名都行（包括直接存在本地的html文件）出于安全考虑最好只设置 你信任的来源也可以填域名表示只接受某个域名
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type"); //可以支持的消息首部列表
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS"); //可以支持的提交方式
  res.header("Content-Type", "application/json;charset=utf-8"); //响应头中定义的类型
  next();
});

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3306",
  password: "123456789wang",
  database: "ezstudent2023",
  // database: "vue-manage",
  // database: "db1",
});
let data2 = null;
let TableNmae = "SELECT * FROM student"
// let TableNmae = "SELECT * FROM album";
// let TableNmae = "SELECT * FROM grade";

connection.query(TableNmae, function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results);
  data2 = results;
});

connection.end();

app.post("/api/name/", function (req, res) {
  res.send(data);
});

app.get("/api/detailed/", function (req, res) {
  res.send(data1);
});

app.get("/api/class_room/", function (req, res) {
  res.send(data2);
});

app.listen(port, () => {
  console.log(`express server start at http://localhost:${port}`);
});
