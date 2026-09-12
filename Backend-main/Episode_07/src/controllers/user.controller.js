import jwt from 'jsonwebtoken'
import { ENV } from '../config/ENV.js'
import { User } from '../models/user.model.js'

// token generate karne ka helper function

const generateToken = (userId)=>{
    return jwt.sign(
        {id:userId},
        ENV.SECRET_KEY,
        {expiresIn:ENV.JWT_EXPIRE}

    )
}


export const Register =async(req ,res)=>{
    try {
        const {name, email, password} = req.body

        // validation

        if(!name || !email ||!password){
            return res.status(401).json({
                message:"Please provide all the details",
                success:false
            })
        }

        // check karna hai ki user ka already account hai ya nhi 

        const existingUser = await User.findOne({email})

        if(existingUser){
            return res.status(404).json({
                message:"User already exist try different email",
                success:false
            })
        }

        // user banao

        const user = await User.create({
            name,
            email,
            password
        })

        const token = generateToken(user._id)

        res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(201).json({
            message:"User registered successfully",
            success:true,
            data:user
        })





    } catch (error) {
        console.log(`error from register controller, ${error}`)
        return res.status(500).json({
            message:"Server errorr"
        })
    }
}

export const Login = async(req,res)=>{
    try {
        const {email, password} = req.body;

        // validation

        if(!email || !password){
            return res.status(404).json({
                message:"Please provide all the details",
                success:false
            })
        }


        const user = await User.findOne({email})

        if(!user){
            return res.status(401).json({
                message:"something went wrong",
                success:false
            })
        }

        // password check karo

        const isPasswordCorrect=  await user.comparePassword(password)

        if(!isPasswordCorrect){
            return res.status(401).json({
                message:"something went wrong",
                success:false
            })
        }

        const token = generateToken(user._id)

        res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(200).json({
            message:`user logged in successfully`,
            success:true,
            data:user

        })
        
    } catch (error) {
        console.log(`error from login controller, ${error}`)
        return res.status(500).json({
            message:"Server errorr"
        })
    }
}


export const getMe=async(req,res)=>{
    try {
        const user = await User.findById(req.user).select('-password')
        return res.status(200).json({
            success: true,
            data: user
        })
    } catch (error) {
        console.log(`error from get me controller, ${error}`)
        return res.status(500).json({
            message:"Server errorr"
        })
    }
}