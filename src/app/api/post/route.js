import { connectDb } from "@/lib/db";
import Post from "@/models/Post";

export async function POST(req) {
  const postData = await req.json();
  console.log(postData);

  try {
    await connectDb();

    const newPost = await Post.create({
      ...postData,
      likes: {
        count: 0,
        likedBy: [],
      },
      comments: [],
    });

    console.log(newPost);

    return Response.json(newPost);
  } catch (error) {
    console.log(error);
  }
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    await connectDb();

    const posts = await Post.find({ "user.email": email });

    return Response.json(posts);
  } catch (error) {
    console.log(error);
  }
}
