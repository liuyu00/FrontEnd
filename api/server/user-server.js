var userDbUtil = require('../dbUtil/userDbUtil')
var appResponse = require('../dbUtil/app-response')


module.exports = function (app) {

    app.get('/home/article/:type', function (req, res) {
        res.writeHead(200, {'Content-type': 'text/plain'})
        res.end('hello world')
    })

    app.post('/user/login', function (req, res) {
        console.log(req.body)

        userDbUtil.saveUser(req.body).then(function (response) {
            console.log( response )
            var respResult = {
                status: 1,
                message: '成功'
            }
            appResponse(res, JSON.stringify(respResult))
        }, function () {
            var respResult = {
                status: 0,
                message: '用户名或密码错误,登录失败!'
            }
            appResponse(res, JSON.stringify(respResult))
        })
    })
}
