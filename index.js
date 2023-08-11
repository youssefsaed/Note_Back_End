import express from 'express'
import dbConnection from './DB/db.connection.js'
import * as Router from './index.routes.js'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
const app = express()
const baseUrl='/Note/v1'

const port = 3000
app.use(cors())
app.use(express.json())

app.use(`${baseUrl}/Auth`,Router.userRouter)
app.use(`${baseUrl}`,Router.noteRouter)

app.all('*', (req, res, next) => {
    res.json({message:"invalid url - can't access this endpoint" + req.originalUrl})
})

dbConnection()
app.listen(port, () => {
    console.log(`servre is running on port ${port}........`);
})