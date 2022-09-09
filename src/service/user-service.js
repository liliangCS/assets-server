const connections = require("../app/database")

class UserService {
  // 根据用户名查询
  async getUserByUsername(username) {
    const statement = "SELECT * FROM user WHERE username = ?;"
    const [res] = await connections.execute(statement, [username])
    return res
  }
}

module.exports = new UserService()