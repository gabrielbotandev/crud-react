import express from 'express'
import userRoutes from './routes/users/routes.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/', userRoutes)

app.listen(8800, () => {
  console.log('Server is running on port 8800')
})
