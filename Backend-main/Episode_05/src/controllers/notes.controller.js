import { Notes } from "../models/notes.model.js"

export const getAllNotes=async(req ,res)=>{
    try {
        const notes = await Notes.find()

        return res.status(200).json({
            success:true,
            message:`${notes.length} notes mile`,
            data:notes
        })
    } catch (error) {
        console.log(`error from getAllNOtes ${error}`)
        return res.status(500).json({
            success:false,
            message:"server error",
            data:null

        })
    }
}


export const getNoteById = async(req,res)=>{
    try {
        const {id} = req.params
        const notes = await Notes.findById(id) 

        if(!notes){
            return res.status(404).json({
                success:false,
                message:"Notes nahi mile"
            })
        }

        return res.status(200).json({
            success:true,
            message:"Notes mile gaye",
            data:notes
        })
    } catch (error) {
        
        console.log(`error from getNoteById ${error}`)
        return res.status(500).json({
            success:false,
            message:"server error",
            data:null

        })
    }
}

export const createNote=async(req,res)=>{
    try {
        const {title, content} = req.body;

        // validation

        if(!title || !content){
            return res.status(400).json({
                success:false,
                message:"please provide all the details"
            })
        }

        const note = await Notes.create({
            title,
            content
        })

        return res.status(201).json({
            message:"notes create ho gaye",
            success:true,
            data:note
        })

    } catch (error) {
         console.log(`error from create notes ${error}`)
        return res.status(500).json({
            success:false,
            message:"server error",
            data:null

        })
    }
}

export const updateNote = async(req,res)=>{
    try {
        const {id} = req.params
        const {title, content} =req.body

        const note = await Notes.findByIdAndUpdate(
            id,
            {title, content},
            {new:true,
                runValidators:true
            }
        )

        if(!note){
            return res.status(404).json({
                success:false,
                message:"notes nai mile update karne k liye"
            })
        }

        return res.status(201).json({
            message:"notes update ho gaye",
            success:true,
            data:note
        })
    } catch (error) {
        console.log(`error from update notes ${error}`)
        return res.status(500).json({
            success:false,
            message:"server error",
            data:null

        })
    }
}


export const deleteNote=async(req,res)=>{
    try {
        const {id} = req.params

        const note = await Notes.findByIdAndDelete(id)

        if(!note){
            return res.status(404).json({
                message:"note not found",
                success:false,
                data:null
            })
        }

        return res.status(201).json({
            message:"note delete ho gaya",
            success:true,
            data:note
        })
    } catch (error) {
        
        console.log(`error from delete notes ${error}`)
        return res.status(500).json({
            success:false,
            message:"server error",
            data:null

        })
    }
}