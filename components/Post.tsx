import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Post, User } from "@prisma/client";

type PostProps = {
  post: Post & {
    author: User;
  };
};

export function Post(props: PostProps) {
  const { post } = props;

  return (
    <div className="border border-gray-400 rounded-md py-1 px-3 mb-3">
      <div className="flex gap-1 items-center">
        <h1 className="flex-1 font-bold text-xl">{post.title}</h1>
        <UserCircleIcon className="h-10 w-10 text-gray-500" />
        <span className="">{post.author.name}</span>
      </div>
      <p className="text-gray-700">{post.content}</p>
    </div>
  );
}
