var path = require('path')
var express = require('express')
var bodyParser = require('body-parser');
var cors = require("cors")

var userServer = require('./server/user-server.js');
var question = require('./server/question-server.js');

var app = express();

app.use(cors());
app.use(bodyParser.json());     // for parsing application/json
app.use(bodyParser.urlencoded({extended: true}));       // for parsing application/x-www-from-urlencoded

//设置跨域访问
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods","POST,GET");
//     res.header("Access-Control-Max-Age","86400");
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });

// default port where dev server listens for incoming traffic
var port = 8083;

userServer( app )
question( app )


module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log('Listening at ' + uri + '\n')
})
