const Router = require("koa-router")
const router = new Router({ prefix: "/image" })

const { getRandomImg, getAllImg, updateImg, removeImg, getImg } = require("../controller/image-controller")

const verifyAuth = require("../middleware/verifyAuth")
// 随机图片接口
router.get("/random", getRandomImg)
// 所有图片接口
router.get("/", getAllImg)
// 更新图片接口
router.patch("/:imageId", verifyAuth, updateImg)
// 删除图片接口
router.delete("/:imageId", verifyAuth, removeImg)
// 获取单个图片
router.get("/:imageId", getImg)
module.exports = router