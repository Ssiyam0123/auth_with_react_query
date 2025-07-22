"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status: logedIn } = useSession();
  console.log(session);
  // console.log(status)
  const menu = () => {
    return (
      <div className="flex justify-between mt-10 text-xl">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/profile"}>profile</Link>
        {session && <button onClick={() => signOut({callbackUrl:"/"})}>logout</button>}
        {!session && <Link href={"/register"}>register</Link>}
      </div>
    );
  };
  return <div className="w-[60%] mx-auto">{menu()}</div>;
}
