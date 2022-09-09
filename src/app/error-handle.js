const errorType = require("../constants/error-types")

const errorHandler = (error, ctx) => {
  let status = 404, msg = "默认错误"
  switch(error.message) {
    case errorType.USRENAME_OR_PASSWORD_IS_EMPTY:
      status = 400
      msg = "用户名或者密码不能为空"
      break
    case errorType.USERNAME_IS_NOT_ESISTS:
      status = 400
      msg = "用户名不存在"
      break
    case errorType.PASSWORD_IS_ERROR:
      status = 400
      msg = "密码错误"
      break
    case errorType.UNAUTHORIZATION:
      status = 401
      msg = "无效的token"
      break
    case errorType.NOPERMISSION:
      status = 401
      msg = "无操作权限"
      break
  }
  ctx.status = status
  ctx.body = msg
}

module.exports = errorHandler