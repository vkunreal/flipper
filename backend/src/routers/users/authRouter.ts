import { Router } from 'express'
import { check } from 'express-validator'
import authController from '../../controllers/users/authController'

const authRouter = Router()

authRouter.post(
  '/login',
  [
    check('email', 'Email must not be empty').notEmpty(),
    check(
      'password',
      'Password length must be between 4 and 32 characters'
    ).isLength({ min: 4, max: 32 }),
  ],
  authController.login
)

authRouter.post(
  '/singup',
  [
    check('username', 'Username must not be empty').notEmpty(),
    check('email', 'Email must not be empty').notEmpty(),
    check(
      'password',
      'Password length must be between 4 and 32 characters'
    ).isLength({ min: 4, max: 32 }),
  ],
  authController.singup
)

export default authRouter
