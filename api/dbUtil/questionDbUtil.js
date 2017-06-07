/**
 * Created by zhouxiong on 16/12/19.
 */

var connection = require('./dbConnection')

var questionDbUtil = {};

// 获取导航
questionDbUtil.getMenuList = function (user) {
    var promise = new Promise(function (resolve, reject) {
        var sql = 'select * from menuType';
        var params = [];

        connection.query(sql, params, function (error, response) {
            if(error){
                reject(error)
            } else {
                resolve(response)
            }
        })
    })
    return promise
}


module.exports = questionDbUtil
