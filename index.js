import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import './DB/connection.js'
import router from './Router/routes.js';
import cors from 'cors'

const server = express()
server.use(express.json())
server.use(cors())
server.use(router)
const PORT = process.env.PORT

server.listen(PORT,()=>{
    console.log('server listening on port',PORT)
})

server.get('/',(req,res)=>{
    res.send('Welcome to seclob server')
})