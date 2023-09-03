import prisma from "../../libs/prismadb"
import { NextResponse } from "next/server"

/* url http://localhost:3000/api/posts  */
export const POST = async (request) => {
    
    try {
        const body = await request.json();
        
        const {title, description } = body;
        const newPost = await prisma.post.create({
            data:{title, description}
        })
        return NextResponse.json(newPost);
    } catch (error) {
        return NextResponse.json({message: "Post error", error}, {satus: 500});
    }   
}

export const GET = async () => {
    
    try {
        const responseData = await prisma.post.findMany()
        return NextResponse.json(responseData);
    } catch (error) {
        return NextResponse.json({message: "Post get error", error}, {satus: 500});
    }   
}



