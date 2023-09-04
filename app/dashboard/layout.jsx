import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="container mx-auto px-4 grid grid-cols-[300px_auto] gap-10 my-10">
      <div className="flex flex-col gap-2">
        <Link className="bg-emerald-600 p-3 text-white" href={"/dashboard"}>
          Dashboard
        </Link>
        <Link
          className="bg-emerald-600 p-3 text-white"
          href={"/dashboard/add_post"}
        >
          Add Post
        </Link>
        <Link
          className="bg-emerald-600 p-3 text-white"
          href={"/dashboard/posts"}
        >
          All Post
        </Link>
      </div>
      {children}
    </div>
  );
};

export default layout;
