/**
 * Created by Bjike on 2016/8/27.
 */
    //全局路径 和 系统模块
var rootpath = __dirname;
var fs = require("fs");

//引入第三方包
var express = require('express');
var http = require('http');

//创建服务器
var app = express();

//配置静态服务器
app.use(express.static(rootpath + '/web'));

//配置404错误   404并非是一个错误  使用中间件来处理
app.use(function( req,res,next ){
    if( req.xhr ){   //判断是不是ajax请求
        res.status(404).end();
    }else{
        res.status(404).redirect('/404.html');
    }
});
//500服务器错误
app.use(function(err,req,res,next) {
    console.error(err.stack);
    log.error(err.stack);
        if( req.xhr ) {
        res.status(500).end();
    } else {
        res.status(500).redirect("/500.html");
    }
});



//监听80端口
app.listen(80,function(req,res){


    console.log("服务器已开启");

});