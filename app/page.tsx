import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
  return (
    <div className="root">
      <div className="text-center mt-2 p-5">
        <h1 className="text-4xl">Posts</h1>
        <hr className="mt-2" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allPosts.map((post) => (
          <Link key={post._id} href={post.slug}>
            <span className="no-underline" title={post.title}>
              <article className="bg-gray-800 p-6 rounded-xl mb-4 cursor-pointer transition-transform transform hover:-translate-y-4 min-h-80">
                <h2 className="text-3xl text-white mb-4 overflow-hidden overflow-ellipsis line-clamp-2">
                  {post.title}
                </h2>
                {post.description && (
                  <p className="text-lg text-gray-300">{post.description}</p>
                )}
              </article>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
