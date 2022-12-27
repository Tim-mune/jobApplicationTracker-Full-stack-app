// import cors from 'cors'
import 'express-async-errors'
import express from 'express'
const app=express()
import dotenv from 'dotenv'
import morgan from 'morgan'
dotenv.config()
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'
import helmet from 'helmet'
import xss from 'xss-clean'
import mongoSanitize from 'express-mongo-sanitize'
import cookieParser from 'cookie-parser'
// middleware
import notFoundMiddleware from './middleware/Not-Found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import authenticateUser from './middleware/auth.js'

// db
import connectDB from './db/connect.js'
// routes
import authRoutes from './routes/authRoutes.js'
import jobsRoutes from './routes/jobsRoutes.js'

const port=process.env.PORT||5000
// app.use(cors())
if(process.env.NODE_ENV!=='production'){
    app.use(morgan('dev'))
}

const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.resolve(__dirname,'./client/build')))
app.use(express.json())
app.use(cookieParser())
app.use(helmet())
app.use(xss())
app.use(mongoSanitize())
app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/jobs',authenticateUser,jobsRoutes)
app.get('*',(req,res)=>{
res.sendFile(path.resolve(__dirname,'./client/build','index.html'))
})
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)
const start=async()=>{
    try {
await connectDB(process.env.MONGO_URI)
app.listen(port,()=>{console.log(`server is up on :${port}`)})
    } catch (error) {
        console.log(error)
    }
}
start()