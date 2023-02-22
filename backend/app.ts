import express from 'express'
import dotenv from 'dotenv'
import { addRouters } from './src'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

addRouters(app)

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT)
})
