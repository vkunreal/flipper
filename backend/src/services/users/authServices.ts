import { request } from '../../db/database'
import { getDate } from '../../utils'
import usersServices from './usersServices'

class authServices {
  static async createUser(username = '', email = '', password_hash = '') {
    const registeredAt = getDate()

    if (!username.trim() || !email.trim() || !password_hash.trim()) {
      throw new Error('values is empty')
    }

    await request(`
      INSERT INTO users (username, email, password_hash, registered_at)
      VALUES
      ("${username}", "${email}", "${password_hash}", "${registeredAt}")
    `)

    const user = await usersServices.findUser(username, email)

    return user
  }
}

export default authServices
