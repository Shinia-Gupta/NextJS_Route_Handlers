import { comments } from "../data";

//Since we are only interested in the context, so we can prefix request object with an underscore
export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
const {id}=await params
const comment=comments.find(c=>c.id===parseInt(id))
return Response.json(comment)
}