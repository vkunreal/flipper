import { Express } from 'express'

import authRouter from './routers/users/authRouter'
import usersRouter from './routers/users/usersRouter'

export const addRouters = (app: Express) => {
  app.use('/api', usersRouter)
  app.use('/auth', authRouter)
}
