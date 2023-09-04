import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Home() {
  const posts = await getData();

  return (
    <div className="container mx-auto px-4 my-10">
      <div className="grid grid-cols-3 gap-8">
        {posts?.map((item) => (
          <div key={item.id} className=" bg-white border border-gray-200 rounded-sm shadow ">
            <Link href={`/posts/${item.id}`}>
              <Image height={100} width={100} className="bg-gray-500 w-full h-auto" src="vercel.svg" alt={item.title} />
            </Link>
            <div className="p-5">
              <Link href={`/posts/${item.id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  {item.title}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700  line-clamp-3">
                {item.description}
              </p>
              <Link
                href={`/posts/${item.id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-emerald-600 rounded-sm hover:bg-emerald-700"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
