const express = require('express')
const data = require('./resData/news.js')
const data1 = require('./resData/detail.js')

const app = express()
// app.use(express.json()) //  body-parser已经在2019年弃用
// app.use(express.urlencoded({ extended: false })) //中间件解析post
// 通过post agent本地测试post接口，get接口可以在浏览器上打印
const port = 3000

app.post('/api/name/', function (req, res) {
    res.send(data)
})


app.get('/api/detailed/', function (req, res) {
    res.send(data1)
})


app.listen(port, () => {
    console.log(`express server start at http://localhost:${port}`)

})