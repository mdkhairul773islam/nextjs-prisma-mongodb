"use client";
import { usePathname } from "next/navigation";
import React from "react";

async function getData(path) {
  const res = await fetch(`http://localhost:3000/api/${path}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async () => {
  const pathname = usePathname();
  const post = await getData(pathname);

  return (
    <div className="bg-white border mx-auto max-w-3xl p-10 my-10">
      <img src="/vercel.svg" className="w-full h-auto" alt={post.post} />
      <h3 className="text-3xl my-8">{post.title}</h3>
      <p className="text-xl">{post.description}</p>
    </div>
  );
};

export default page;
