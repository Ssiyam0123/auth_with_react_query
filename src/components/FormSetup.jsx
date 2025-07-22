"use client";
import { useRegister } from "@/hooks/useRegister";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function FormSetup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const path = usePathname();
  console.log(path);

  const handleRegister = async () => {
    // await signIn("credentials", { email, password });
    const body = {
      email,
      password,
    };
    const res = await useRegister(body);
    if (res?.id) {
      setEmail("");
      setPassword("");
      toast.success("registration successfull");
      router.push("/login");
    } else if (!res?.id) {
      toast.error("error while registrating the user");
    }
  };

  const handleLogin = async () =>{
    const res = await signIn('credentials', {email, password})
    console.log(res)
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <p>enter your email : </p>
        <input
          type="email"
          className="border-2 p-2 rounded-2xl"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-2">
        <p>enter your password : </p>
        <input
          type="password"
          className="border-2 p-2 rounded-2xl"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        {path == "/register" ? (
          <button onClick={handleRegister} className="border-2 p-2 rounded-2xl">
            Register
          </button>
        ) : (
          <button onClick={handleLogin} className="border-2 p-2 rounded-2xl">
            login
          </button>
        )}
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="border-2 p-2 rounded-2xl"
        >
          google
        </button>

        {path == "/register" && (
          <p>
            allready have an account? <Link href={"/login"}>please login</Link>
          </p>
        )}
        {path == "/login" && (
          <p>
            dont have any account?{" "}
            <Link href={"/register"}>please register</Link>
          </p>
        )}
      </div>
    </div>
  );
}
