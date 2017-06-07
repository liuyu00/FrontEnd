/**
 * Created by zhouxiong on 16/12/19.
 */

var mysql = require('mysql')

var options = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '1234567809',
    database: 'lucky'
}

var connection = mysql.createConnection(options)


  connection.connect(function(){
    console.log("成功")
  });
  connection.on('error', function(){
    console.log("失败")
  });

module.exports = connection
