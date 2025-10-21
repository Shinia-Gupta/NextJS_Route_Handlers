import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
    //fetch all query parameters from the URL
    const searchParams=request.nextUrl.searchParams;
    const query=searchParams.get('query');
    const filteredComments=query? comments.filter(c=>c.text.includes(query)) : comments;
    return Response.json(filteredComments);
    //    return Response.json(comments);
}

export async function POST(request: Request) {
    const { text } = await request.json();
    const newComment = {
        id: comments.length + 1,
        text,
    };
    comments.push(newComment);
    // return Response.json(newComment, { status: 201 });
    //OR
    return new Response(JSON.stringify(newComment), {
        status: 201,
        headers: { "Content-Type": "application/json" },
    });
}