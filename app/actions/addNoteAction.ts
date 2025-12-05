'use server'
import {prisma} from "../../lib/prisma"
const addNote = async(formdata:FormData) =>{
    await prisma.post.create({
        data:{
            title:formdata.get("title") as string,
            content:formdata.get('content') as string,
            createdAt:formdata.get('date') ? new Date(formdata.get('date') as string) :undefined
        }
    })
}

export {addNote}