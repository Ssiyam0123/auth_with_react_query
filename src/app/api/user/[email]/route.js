import { connectDb } from "@/lib/db";
import User from "@/models/User";

export async function GET(req, { params }) {
  const { email } = await params;
  try {
    await connectDb();
    const user = await User.findOne({ email });
    if (!user) {
      return Response.json({ message: "user not found" });
    }
    return Response.json(user);
  } catch (error) {
    console.log(error)
  }
}
