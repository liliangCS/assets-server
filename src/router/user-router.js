const Router = require("koa-router")
const router = new Router({ prefix: "/user" })

const { userLogin } = require("../controller/user-controller")
const verifyLogin = require("../middleware/verifyLogin")
// 登陆接口
router.post("/login", verifyLogin, userLogin)

module.exports = router
