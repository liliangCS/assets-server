const app = require("./app")
const { APP_PORT } = require("./app/config")
// 控制台颜色
require("colors")

app.listen(APP_PORT, () => {
  console.log(`服务启动于: http://127.0.0.1:${APP_PORT}`.yellow)
})