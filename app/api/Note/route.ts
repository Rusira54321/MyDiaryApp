import { NextRequest, NextResponse } from "next/server";
import {prisma} from "../../../lib/prisma"
export async function POST(req:NextRequest)
{
    const body = await req.json()
    const {title,content,date} = body
    if(!title || title.trim().length<3)
    {
        return NextResponse.json({error:"Title must have at least 3 characters"},{status:400});
    }
    if(!content || content.trim().length<10)
    {
        return NextResponse.json({error:"Content must have at least 10 characters"},{status:400});
    }
    if(date)
    {
        const validateDate = new Date(date as string)
        if(isNaN(validateDate.getTime()))
        {
            return NextResponse.json({error:"Invalid date"},{status:400});
        }
        if(validateDate.getTime()>Date.now())
        {
            return NextResponse.json({error:"The date cannot be in the future"},{status:400});
        }
    }
    try{
        await prisma.post.create({
            data:{
                title,
                content,
                createdAt:date ? new Date(date as string) : undefined 
            }
        })
        return NextResponse.json({message:"successfully added note to the diary"},{status:201});
    }catch(err)
    {
        if(err instanceof Error)
        {
            return NextResponse.json({error:err.message},{status:500});
        }
        return NextResponse.json({error:"DataBase error"},{status:500});
    }
}