import { NextRequest, NextResponse } from "next/server";
import {prisma} from "../../../../../lib/prisma"
export async function POST(request:NextRequest,context:{params:Promise<{id:string}>})
{
    try{
    const NoteId = (await context.params).id
    const id = parseInt(NoteId)
    const body = await request.json();
    const {title,content} = body;
    if(isNaN(id))
    {
        return NextResponse.json({error:"NoteId is not valid id"},{status:400}); 
    }
    if(!title || !content)
    {
        return NextResponse.json({error:"All fields are required"},{status:400});
    }
    await prisma.post.update({
        where:{
            id:id
        },
        data:{
            title:title,
            content:content,
            updatedAt:new Date()
        }
    })
    return NextResponse.json({message:"Successfully updated"},{status:200});
    }catch(err)
    {
        if(err instanceof Error)
            {
                return NextResponse.json({error:err.message},{status:500});
            }
        return NextResponse.json({error:"DataBase error"},{status:500});
    }
}