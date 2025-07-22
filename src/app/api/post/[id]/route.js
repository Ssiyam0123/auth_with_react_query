import { connectDb } from "@/lib/db";
import Post from "@/models/Post";

export async function GET(req,{params}) {
    const {id} = await params;

    try {
        await connectDb()
        const post = await Post.findOne({_id : new Object(id)})
        return Response.json(post)
    } catch (error) {
        console.log(error)
    }
}