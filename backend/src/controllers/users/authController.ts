import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { validationResult } from 'express-validator/src/validation-result'
import authServices from '../../services/users/authServices'
import usersServices from '../../services/users/usersServices'

dotenv.config()

const generateAccessToken = (id: string, role: string) => {
  const payload = { id, role }
  return jwt.sign(payload, process.env.secret_key, { expiresIn: '24h' })
}

class authController {
  static async login(req, res) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({ status: false, errors })
      }

      const { email, password } = req.body

      const user = await usersServices.findUser('', email)

      console.log(user)

      if (!user) {
        return res
          .status(400)
          .json({ status: false, message: 'Uncorrected data' })
      }

      const validPassword = bcrypt.compareSync(password, user.password_hash)

      if (!validPassword) {
        return res
          .status(400)
          .json({ status: false, message: 'Uncorrected data' })
      }

      const token = generateAccessToken(String(user.id) || '', user.role || '')
      return res.status(200).json({ token })
    } catch (e) {
      console.error(e)
      res.status(500).json({ status: false, message: 'Server error' })
    }
  }

  static async singup(req, res) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({ status: false, errors })
      }

      const { username, email, password } = req.body

      const candidate = await usersServices.findUser(username, email)

      if (candidate) {
        return res
          .status(400)
          .json({ status: false, message: 'User already exists' })
      }

      const hashedPassword = bcrypt.hashSync(password, 7)
      const user = await authServices.createUser(
        username,
        email,
        hashedPassword
      )

      const token = generateAccessToken(String(user.id) || '', user.role || '')

      return res
        .status(201)
        .json({ status: true, token, message: 'User was created' })
    } catch (e) {
      console.error(e)
      res.status(500).json({ status: false, message: 'Server error' })
    }
  }
}

export default authController
