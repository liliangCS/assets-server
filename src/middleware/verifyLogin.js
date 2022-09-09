const errorType = require("../constants/error-types")
const { getUserByUsername } = require("../service/user-service")

// 验证登陆的中间件
const verifyLogin = async (ctx, next) => {
  const { username, password } = ctx.request.body
  // 判断用户名和密码是否为空
  if (!username || !password) {
    const error = new Error(errorType.USRENAME_OR_PASSWORD_IS_EMPTY)
    return ctx.app.emit("error", error, ctx)
  }
  // 获取用户信息
  const userList = await getUserByUsername(username)
  // 判断用户是否存在
  if (userList.length === 0) {
    const error = new Error(errorType.USERNAME_IS_NOT_ESISTS)
    return ctx.app.emit("error", error, ctx)
  }
  // 判断密码是否正确
  if (password !== userList[0].password) {
    const error = new Error(errorType.PASSWORD_IS_ERROR)
    return ctx.app.emit("error", error, ctx)
  }
  ctx.user = userList[0]
  await next()
}

module.exports = verifyLogin