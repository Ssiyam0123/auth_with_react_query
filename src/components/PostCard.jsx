import React from "react";

export default function PostCard({ data }) {
  return (
    <div className="space-y-2">
      {data?.map((c) => (
        <div className="border-2 p-2 rounded-2xl" key={c?._id}>
          <p>{c?.title}</p>
          <p>{c?.description}</p>
          <div className="mb-5 mt-2 border-t-2">
            <button> Like : {c?.likes}</button>
          </div>
        </div>
      ))}
    </div>
  );
}
