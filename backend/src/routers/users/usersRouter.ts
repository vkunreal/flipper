import Router from 'express'
import usersController from '../../controllers/users/usersController'

const usersRouter = Router()

usersRouter.get('/users', usersController.getAllUsers)
usersRouter.get('/users/:user_id', usersController.getUserById)

usersRouter.post('/users', usersController.getUsersByName)

export default usersRouter
