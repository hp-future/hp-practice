const express = require('express')
const app = express()
const path = require('path')

const port = 3000

const login = require('./router/login/index.js')
const myCollection = require('./router/myCollection/index.js')

//跨域问题解决方面
const cors = require('cors');  
app.use(cors({  
    origin:['http://localhost:8080'],
    methods:['GET','POST'],
}));
// app.use(express.static('assets'));//express.static是express提供的内置的中间件用来设置静态文件路径
app.use(express.static(path.join(__dirname)))
//跨域问题解决方面
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
　next();　
});

app.get('/login', login)
app.get('/myCollection', myCollection)

app.listen(port, (req, res) => {	
	console.log(`Example app listening on port ${port}!`)
})