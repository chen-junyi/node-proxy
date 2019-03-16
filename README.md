# node-proxy
node 实现代理服务

### 用express本地起node，直接请求node的接口，node转发请求到 需要代理的地址。
### 目前这个用了两种方式实现，一个是借助http-proxy-middelware中间件代理，这个实际上也是webpack-dev-server实现代理的方式。
### 还有一个是用pipe，将它把浏览器的请求数据传给 request 客户端。


### 实际上代码非常简单，这里作为整理学习使用。