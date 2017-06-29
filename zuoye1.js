/*
 * 这些页面 有几个请求
 * 3个页面请求
 * 1个图片请求
 * 共4个请求
 *
 * */
var http = require('http');
var fs = require('fs');
// 创建服务

http.createServer(function (req, res) {
    var url = req.url;
    switch (url) {
        case "/index.html": 
         fs.readFile("index.html","utf-8",function (err, data) {
             if (err){
                 console.log("读取失败");
                 console.log(err)
             }else {
                 res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                 res.end(data)
             }
         })
            break;
        case "/index.css": 
         fs.readFile("index.css","utf-8",function (err, data) {
             if (err){
                 console.log("读取失败");
                 console.log(err)
             }else {
                 res.writeHead(200,{"content-type":"text/css;charset=utf8"})
                 res.end(data)
             }
         })
            break;
            case "/index.js": 
         fs.readFile("index.js","utf-8",function (err, data) {
             if (err){
                 console.log("读取失败");
                 console.log(err)
             }else {
                 res.writeHead(200,{"content-type":"text/js;charset=utf8"})
                 res.end(data)
             }
         })
            break;
        case "/index1.html":

            fs.readFile("index1.html","utf-8",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                    res.end(data)
                }
            })

            break;
        case "/demo.html": 
            fs.readFile("demo.html","utf-8",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                    res.end(data)
                }
            })
            break;
        case "/QQ.png":

            fs.readFile("QQ.png",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    console.log(data)

                    res.writeHead(200,{"content-type": "image/png;"})
                    res.end(data)
                }
            })
            break
        default: //其他请求
            res.end("404 Not Found")
    }
}).listen(3000);





