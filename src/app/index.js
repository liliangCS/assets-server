const Koa = require("koa")
const bodyParser = require("koa-bodyparser")
const setHeader = require("../middleware/setHeader")
const useRoutes = require("../router")
const errorHandler = require("./error-handle")
const app = new Koa()
// 注册中间件
app.use(bodyParser())
app.use(setHeader)
// 注册路由
useRoutes(app)
// 错误处理
app.on("error", errorHandler)

module.exports = app