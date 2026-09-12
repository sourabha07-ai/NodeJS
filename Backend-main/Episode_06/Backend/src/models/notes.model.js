import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'title zaruri hai'],
        trim:true,
        maxlength:[100,'title 100 charachter se zyada na ho']
    },
    content:{
        type:String,
        required:[true,'content zaruri hai'],
        trim:true
    }
})


export const Notes = mongoose.model('Notes',notesSchema)