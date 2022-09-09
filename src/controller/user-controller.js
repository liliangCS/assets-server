const jwt = require("jsonwebtoken")

class UserController {
  // 用户登陆
  async userLogin(ctx, next) {
    const { id, username } = ctx.user
    const token = jwt.sign({ id, username }, "shhhhh")
    ctx.body = {
      msg: "登陆成功",
      token
    }
  }
}

module.exports = new UserController()