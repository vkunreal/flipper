import { request } from './../../db/database'

class usersServices {
  static async getUsers() {
    return await request('SELECT * FROM users')
  }

  static async getUserById(id: number) {
    return await request(
      `SELECT * FROM users WHERE id = "${id}"`,
      (res) => res[0][0]
    )
  }

  protected static async getUserByUsername(username: string) {
    return await request(
      `SELECT * FROM users WHERE username = "${username}"`,
      (res) => res[0][0]
    )
  }

  protected static async getUserByEmail(email: string) {
    return await request(
      `SELECT * FROM users WHERE email = "${email}"`,
      (res) => res[0][0]
    )
  }

  static async findUser(username = '', email = '') {
    const usernameCandidate = await this.getUserByUsername(username)
    const emailCandidate = await this.getUserByEmail(email)

    return usernameCandidate || emailCandidate
  }

  static async getUsersByFullName(name: string) {
    return await request(`
      SELECT * FROM users WHERE CONCAT(users.firstname, " ", users.lastname) LIKE "%${name}%"
    `)
  }

  static async getUsersByUsername(username: string) {
    return await request(
      `SELECT * FROM users WHERE username LIKE "%${username}%"`
    )
  }
}

export default usersServices
