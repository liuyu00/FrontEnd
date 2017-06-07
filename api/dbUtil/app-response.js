/**
 * Created by zhouxiong on 17/1/4.
 */

module.exports = function (response, respObj) {
    response.writeHead(200, {'Content-type': 'text/plain;charset=utf-8'})
    response.end(respObj)
}
