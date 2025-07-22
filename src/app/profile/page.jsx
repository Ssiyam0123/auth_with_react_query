"use client";

import PostCard from "@/components/PostCard";
import PostForm from "@/components/PostForm";
import useCurrentUser from "@/hooks/useCurrentUser";
import useUsersAllPost from "@/hooks/useUsersAllPost";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data } = useSession();
  const email = data?.user?.email;
  const { data: user } = useCurrentUser(email);
  const { data: userPosts } = useUsersAllPost(email);
  console.log(userPosts)


  return (
    <div>
      <div className="text-center mt-20">
        <p>hi {user?.name}</p>
        <p>email: {user?.email}</p>
      </div>
      <div className="flex justify-between mt-20">
        <div className="w-[80%] mx-auto">
          <PostForm />
        </div>
        <div className="w-[80%] mx-auto">
          <p>total posts : {userPosts?.length}</p>
          <div>
            <PostCard data={userPosts} />
          </div>
        </div>
      </div>
    </div>
  );
}
