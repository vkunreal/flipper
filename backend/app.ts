import express from "express"

const app = express()
const PORT = 5000

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello world' })
})

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT) 
})