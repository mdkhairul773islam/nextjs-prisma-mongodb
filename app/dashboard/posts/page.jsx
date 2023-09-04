"use client";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async () => {
  const router = useRouter();
  const posts = await getData();

  const handleDeletePost = (id) => {
    axios
      .delete(`/api/posts/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        router.refresh();
      });
  };
  return (
    <>
      <div className="">
        <h2 className="text-center mb-8 bg-emerald-600 rounded-sm text-white text-xl uppercase font-mono tracking-widest border-b p-3">
          All Post
        </h2>
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Photo
              </th>
              <th scope="col" className="px-6 py-3">
                Post Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {posts?.map((post) => (
              <tr key={post.id} className="bg-white border-b  ">
                <td className="px-6 py-4 ">
                  <img src="/vercel.svg" alt="" />
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {post.title}
                </th>
                <td className="px-6 py-4 ">
                  <span className="line-clamp-1">{post.description}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Link
                      href={"/"}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Edit
                    </Link>
                    <span
                      onClick={() => handleDeletePost(post.id)}
                      className="font-medium text-red-600 hover:underline cursor-pointer"
                    >
                      Delete
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default page;
