const express = require('express')
const proxy = require('http-proxy-middleware')
const app = express()
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

app.use('/',proxy({
    target:serverUrl,
    changeOrigin:false,
}))

app.listen(5000,function(){
    console.log('this application is running at port 5000')
})