import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name zaruri hai '],
        trim:true,

    },
    email:{
        type:String,
        required:[true,'email zaruri hai '],
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:[true,'password zaruri hai '],
        trim:true,
    }
})

// password save hone se pehle hash karo

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        return next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
    
})

// password compare karne ka method

userSchema.methods.comparePassword = async function(enterPassword){
    return await bcrypt.compare(enterPassword,this.password)
}


export const User = mongoose.model("User", userSchema)