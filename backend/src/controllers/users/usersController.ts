import usersServices from "../../services/users/usersServices";

class usersController {
  static async getAllUsers(req, res) {
    const users = await usersServices.getUsers();
    res.status(200).json(users);
  }

  static async getUserById(req, res) {
    const userId = req.params.user_id;
    const user = await usersServices.getUserById(userId);
    res.status(200).json(user);
  }

  static async getUsersByName(req, res) {
    const { name, username } = req.body;

    let users = [];

    if (typeof name === "string" && name.trim()?.length) {
      users = await usersServices.getUsersByFullName(name);
    } else if (typeof username === "string" && username.trim()?.length) {
      users = await usersServices.getUsersByUsername(username);
    }

    res.status(200).json(users);
  }
}

export default usersController;
