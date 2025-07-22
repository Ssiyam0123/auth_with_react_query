"use client";
import { useRegister } from "@/hooks/useRegister";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function FormSetup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const path = usePathname();
  const { status } = useSession();
  console.log(status);
  console.log(path);

  useEffect(() => {
    if (status == "authenticated") {
      router.push("/");
      toast.success("successfully logged in");
    }
  }, [status]);

  const handleRegister = async () => {
    const body = {
      name,
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

  const handleLogin = async () => {
    const isSignIn = await signIn("credentials", { email, password });
    console.log(isSignIn);
  };

  return (
    <div className="space-y-3">
      {path == "/register" && (
        <div className="flex items-center gap-2">
          <p>enter your name : </p>
          <input
            type="text"
            required
            className="border-2 p-2 rounded-2xl"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      )}
      <div className="flex items-center gap-2">
        <p>enter your email : </p>
        <input
          type="email"
          required
          className="border-2 p-2 rounded-2xl"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-2">
        <p>enter your password : </p>
        <input
          type="password"
          required
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
