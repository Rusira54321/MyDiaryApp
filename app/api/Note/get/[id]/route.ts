import { NextRequest, NextResponse } from "next/server";
import {prisma} from "../../../../../lib/prisma"
export async function GET(request:NextRequest,context:{params:Promise<{id:string}>})
{
    try{
    const {id} = await context.params;
    const noteId = parseInt(id)
    if(isNaN(noteId))
    {
        return NextResponse.json({error:`Invalid Note ID,${noteId}`},{status:400});
    }
    const note = await prisma.post.findUnique({
        where:{
            id:noteId
        }
    })
    return NextResponse.json({note},{status:200});
    }catch(err)
    {
        if(err instanceof Error)
        {
             return NextResponse.json({error:err.message},{status:500});
        }
        return NextResponse.json({error:"Database error"},{status:500});
    }
}