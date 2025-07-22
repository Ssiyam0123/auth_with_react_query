import { connectDb } from "@/lib/db";
import User from "@/models/User";

export async function GET() {
  try {
    await connectDb();
    const users = await User.find({}).lean();

    return Response.json(users);
  } catch (error) {
    console.log(error);
  }
}
