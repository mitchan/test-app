import { cookies } from "next/headers";
import { getUserFromCookie } from "../lib/auth";
import { db } from "../lib/db";
import { Post } from "./Post";

function getPosts() {
  const user = getUserFromCookie(cookies());
  if (!user) {
    return [];
  }

  return db.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function Posts() {
  const posts = await getPosts();

  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
