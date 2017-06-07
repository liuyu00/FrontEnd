var questionDbUtil = require('../dbUtil/questionDbUtil')
var appResponse = require('../dbUtil/app-response')


module.exports = function (app) {

    //获取导航菜单
    app.get('/getMenuList', function (req, res) {
        questionDbUtil.getMenuList(req.body).then(function (response) {
            var respResult = {
                code: 1,
                data: response
            }
            appResponse(res, JSON.stringify(respResult))
        }, function () {
            var respResult = {
                code: 0,
                message: '数据查询失败'
            }
            appResponse(res, JSON.stringify(respResult))
        })
    })



}
