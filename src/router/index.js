const { readdirSync } = require("fs")

const useRoutes = (app) => {
  readdirSync(__dirname).forEach(file => {
    if (file === "index.js") return
    const router = require(`./${file}`)
    app.use(router.routes())
    app.use(router.allowedMethods())
  })
}

module.exports = useRoutes