import { NextRequest, NextResponse } from "next/server";
import {prisma} from "../../../../../lib/prisma"
export async function DELETE(request:NextRequest,context:{params:Promise<{id:string}>})
{
    try{
        const {id} = await context.params;
        const noteId = parseInt(id)
        if(isNaN(noteId))
        {
            return NextResponse.json({error:`Invalid Note ID,${id}`},{status:400});
        }
        await prisma.post.delete({
            where:{
                id:noteId
            },
        })
        return NextResponse.json({message:"note deleted successfully"},{status:200});
    }catch(err)
    {
        if(err instanceof Error)
        {
             return NextResponse.json({error:err.message},{status:500});
        }
        return NextResponse.json({error:"Database error"},{status:500});
    }
}