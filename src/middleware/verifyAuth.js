const jwt = require("jsonwebtoken")
const errorType = require("../constants/error-types")

// 验证授权的中间件
const verifyAuth = async (ctx, next) => {
  const { authorization } = ctx.request.headers
  // 检查请求头中是否存在authorization字段
  if (!authorization) {
    const error = new Error(errorType.UNAUTHORIZATION)
    ctx.app.emit("error", error, ctx)
  }
  const token = authorization.replace("Bearer ", "")
  try {
    const userInfo = jwt.verify(token, "shhhhh")
    const { id, username } = userInfo
    if (id !== 1 && username !== "liliang") {
      const error = new Error(errorType.NOPERMISSION)
      return ctx.app.emit("error", error, ctx)
    }
    await next()
  } catch (err) {
    const error = new Error(errorType.UNAUTHORIZATION)
    return ctx.app.emit("error", error, ctx)
  }
}

module.exports = verifyAuth