import Link from 'next/link';

interface Post {
  _id: string;
  slug: string;
  title: string;
  description?: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className="bg-white p-4 rounded-md shadow-md mb-4">
      <Link href={post.slug}>
        <a className="no-underline hover:underline">
          <h2 className="text-2xl">{post.title}</h2>
        </a>
      </Link>
      {post.description && <p className="select-none cursor-default">{post.description}</p>}
    </article>
  );
};

export default PostCard;
