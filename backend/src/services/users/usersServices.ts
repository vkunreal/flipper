import { request } from "./../../db/database";

class usersServices {
  static async getUsers() {
    return await request("SELECT * FROM users");
  }

  static async getUserById(id: number) {
    return await request(
      `SELECT * FROM users WHERE id = "${id}"`,
      (res) => res[0][0]
    );
  }

  static async getUsersByFullName(name: string) {
    return await request(`
      SELECT * FROM users WHERE CONCAT(users.firstname, " ", users.lastname) LIKE "%${name}%"
    `);
  }

  static async getUsersByUsername(username: string) {
    return await request(
      `SELECT * FROM users WHERE username LIKE "%${username}%"`
    );
  }
}

export default usersServices;
