"use strict";
const express = require('express');
const path = require('path');
const app = express();
const request = require('request');
const serverUrl = require('./proxy_config')

app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","http://192.168.9.111:8080");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    res.header("Access-Control-Allow-Credentials","true");
    
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
})
// app.use(express.static(path.join(__dirname, './')));//静态资源index.html和node代码在一个目录下
app.use('/', function(req, res) {
  let url = serverUrl + req.url;
  req.pipe(request(url)).pipe(res);
});


app.listen(3000,function () {//前端ajax地址写 http://127.0.0.1:3000/
  console.log('server is running at port 3000');
});