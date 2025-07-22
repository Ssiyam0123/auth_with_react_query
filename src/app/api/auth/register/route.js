import { connectDb } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    await connectDb();

    const isExisted = await User.findOne({ email });

    if (isExisted) {
      return Response.json({ message: "user allready exist" }, { status: 201 });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser =await User.create({ email, password: hashPassword });
    console.log(newUser);
    return Response.json(
      {
        message: "user created successfully",
        id: newUser?._id.toString(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
  }
}
