import { connectDb } from "@/lib/db";
import Post from "@/models/Post";

export async function POST(req, { params }) {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    const id = searchParams.get("id");
    console.log(email,id)
  try {
    await connectDb();
    const post = await Post.findById(id);
    console.log(post)

    if (!post) {
      return Response.json({ message: "Post not found" }, { status: 404 });
    }

    // Check if the user has already liked the post
    if (post.likes.likedBy.includes(email)) {
      return Response.json({ message: "Already liked" }, { status: 200 });
    }
    

    // Add email to likedBy and increment count
    post.likes.likedBy.push(email);
    post.likes.count += 1;

    await post.save();

    return Response.json(
      {
        message: "Post liked successfully",
        likes: post.likes,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Error liking post" }, { status: 500 });
  }
}
