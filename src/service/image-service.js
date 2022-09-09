const connections = require("../app/database")

class ImageService {
  // 随机图片
  async getRandomImgData() {
    const statement = "SELECT * FROM image;"
    const [res] = await connections.execute(statement)
    return res
  }
  // 获取所有图片
  async getAllImgData() {
    const statement = "SELECT * FROM image;"
    const [res] = await connections.execute(statement)
    return res
  }
  // 更新图片
  async updateImgData(name, imgUrl, imageId) {
    const statement = "UPDATE image SET name = ?, imgUrl = ? WHERE id = ?;"
    const [res] = await connections.execute(statement, [name, imgUrl, imageId])
    return res
  }
  // 删除图片
  async removeImgData(imageId) {
    const statement = "DELETE FROM image WHERE id = ?;"
    const [res] = await connections.execute(statement, [imageId])
    return res
  }
  // 获取单个图片(id)
  async getImgData(imageId) {
    const statement = "SELECT * FROM image WHERE id = ?;"
    const [res] = await connections.execute(statement, [imageId])
    return res[0]
  }
}

module.exports = new ImageService()
