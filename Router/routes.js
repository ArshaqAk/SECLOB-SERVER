import express from 'express'
import { getData } from '../Controller/dataController.js'

const router = new express.Router()

//get data
router.get('/api/data',getData)





export default router