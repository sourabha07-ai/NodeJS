import jwt from 'jsonwebtoken'
import { ENV } from '../config/ENV.js'
import { User } from '../models/user.model.js'

export const protect = async (req, res, next) => {
    try {
        const token = req.cookies.token

        if (!token) {
            return res.status(401).json({
                message: "Unauthorized",
                success: false
            })
        }

        const decode = jwt.verify(token, ENV.SECRET_KEY)
        const user = await User.findById(decode.id).select('-password')

        if (!user) {
            return res.status(404).json({
                message: "User not found",
                success: false
            })
        }

        req.user = user._id
        next()
    } catch (error) {
        console.log(`error from auth middleware ${error}`)
        return res.status(500).json({
            message: "Server error"
        })
    }
}