import express from 'express'
import router from './routes/index.js'
import cors from 'cors'
import connection from './config/connectDB.js'

const port = process.env.PORT || 8000
const app = express()

connection()

// Config Router
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', router)

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
})
