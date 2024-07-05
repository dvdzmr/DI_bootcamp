import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import users_route from './routes/user.r.js'

dotenv.config()

const app = express()

app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true,
    }
))
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(process.env.PORT || 3001, () => {
    console.log(`run on ${process.env.PORT || 3001}`);
})

app.use('/users', users_route)
