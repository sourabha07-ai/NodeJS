
import express from 'express'
import { getMe, Login, Register } from '../controllers/user.controller.js'
import { protect } from '../middleware/auth.middleware.js'
export const userRouter = express()

userRouter.post('/register',Register)
userRouter.post('/login',Login)
userRouter.get('/getme',protect, getMe)