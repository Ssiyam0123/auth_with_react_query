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
  const { data: userPosts, refetch } = useUsersAllPost(email,'single-user');
  console.log(userPosts);

  return (
    <div>
      <div className="text-center mt-20 w-[80%] mx-auto">
        <p>hi {user?.name}</p>
        <p>email: {user?.email}</p>
      </div>
      <p className="text-center mt-5">total posts : {userPosts?.length}</p>
      <div className="flex mt-20">
        <div className="w-[50%] mx-auto flex justify-center">
          <PostForm />
        </div>
        <div className="w-[90%] flex justify-center">
          <div>
            <PostCard data={userPosts} email={user?.email} />
          </div>
        </div>
      </div>
    </div>
  );
}
