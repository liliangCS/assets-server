const { getRandomImgData, getAllImgData, updateImgData, removeImgData, getImgData } = require("../service/image-service")

class ImageController {
  // 获取随机图片
  async getRandomImg(ctx, next) {
    const res =  await getRandomImgData()
    const randomIndex = Math.floor(Math.random() * res.length)
    ctx.body = res[randomIndex]
  }
  // 获取所有图片
  async getAllImg(ctx, next) {
    ctx.body = await getAllImgData()
  }
  // 更新图片
  async updateImg(ctx, next) {
    const { name, imgUrl } = ctx.request.body
    const { imageId } = ctx.request.params
    await updateImgData(name, imgUrl, imageId)
    ctx.body = {
      status: 200,
      msg: "更新成功"
    }
  }
  // 删除图片
  async removeImg(ctx, next) {
    const { imageId } = ctx.request.params
    const res = await removeImgData(imageId)
    const msg = res.affectedRows ? "删除成功" : "数据不存在"
    ctx.body = {
      status: 200,
      msg
    }
  }
  // 获取单个图片
  async getImg(ctx, next) {
    const { imageId } = ctx.request.params
    ctx.body = await getImgData(imageId)
  }
}

module.exports = new ImageController()