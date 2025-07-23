import { connectDb } from "@/lib/db";
import Post from "@/models/Post";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const { id } = await params;

  try {
    await connectDb();
    const post = await Post.findOne({ _id: new Object(id) });
    return Response.json(post);
  } catch (error) {
    console.log(error);
  }
}



export async function DELETE(req, { params }) {
  const { id } = await params; // No need for await here
  console.log(id);

  try {
    await connectDb();

    const deletedPost = await Post.findOneAndDelete({ _id: new ObjectId(id) });

    if (!deletedPost) {
      return Response.json({ message: "Post not found" }, { status: 404 });
    }

    return Response.json({ message: "Post deleted successfully", post: deletedPost });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}
