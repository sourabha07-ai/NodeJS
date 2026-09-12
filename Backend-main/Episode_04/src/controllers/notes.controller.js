import { Notes } from "../models/user.model.js"

export const testNote=async()=>{
    try {
        const note1=await Notes.create({
            title:"meri pehli note",
            content:"ye meri pehli note hai "
        })

        console.log("note ban gayi hai ",note1)
    } catch (error) {
        console.log(`error coming from testnote,${error}`)
    }
}

