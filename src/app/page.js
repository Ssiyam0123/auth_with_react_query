"use client";
import PostCard from "@/components/PostCard";
import useUsersAllPost from "@/hooks/useUsersAllPost";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  const { data } = useUsersAllPost(session?.user?.email, "all-user");
  console.log(data);
  return (
    <div className="w-[80%] mx-auto mt-10">
      <PostCard data={data} />{" "}
    </div>
  );
}
