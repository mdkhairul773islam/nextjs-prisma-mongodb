import prisma from "../../../libs/prismadb"
import { NextResponse } from "next/server"

/* url http://localhost:3000/api/posts  */


export const GET = async (request, {params}) => {
    
    try {
        const {id} = params;

        const post= await prisma.post.findUnique({
            where: {
              id,
            },
          })
        return NextResponse.json(post);
    } catch (error) {
        return NextResponse.json({message: "Post Find error", error}, {satus: 500});
    }   
}

export const PUT = async (request, {params}) => {
    
    try {
        const {id} = params;

        const body = await request.json();
        const {title, description } = body;

        const post= await prisma.post.update({
            where: {
              id,
            },
            data:{title, description}
          })
        return NextResponse.json(post);
    } catch (error) {
        return NextResponse.json({message: "Post Update error", error}, {satus: 500});
    }   
}

export const DELETE = async (request, {params}) => {
    
    try {
        const {id} = params;

        const deletePost = await prisma.post.delete({
            where: {
              id,
            },
          })
        return NextResponse.json("Post has ben delete.");
    } catch (error) {
        return NextResponse.json({message: "Post delete error", error}, {satus: 500});
    }   
}



