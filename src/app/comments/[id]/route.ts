import { comments } from "../data";

//Since we are only interested in the context, so we can prefix request object with an underscore
export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
const {id}=await params
const comment=comments.find(c=>c.id===parseInt(id))
return Response.json(comment)
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {

    const {id}=await params
    const requestBody=await request.json()
    const commentIndex=comments.findIndex(c=>c.id===parseInt(id))
    if(commentIndex>-1){
        comments[commentIndex]={...comments[commentIndex],...requestBody}
        return Response.json(comments[commentIndex])
    }else{
        return new Response("Comment not found", {status:404})
    }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    const {id}=await params
    const commentIndex=comments.findIndex(c=>c.id===parseInt(id))
    if(commentIndex>-1){
        const deletedComment=comments[commentIndex];
        comments.splice(commentIndex,1)
        return Response.json(deletedComment)
    }else{
        return new Response("Comment not found", {status:404})
    }
}