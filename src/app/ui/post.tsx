"use client";

import type { Post } from "@/lib/posts";
import Link from "next/link";
import { use } from "react";

interface PostProps {
  key: number;
  post: Post;
}

export function Post({ post }: PostProps) {
  return (
    <div>
      <p>{post.content}</p>
    </div>
  );
}

export function Posts({
  posts: postsPromise,
}: {
  posts: Promise<ReadonlyArray<Post>>;
}) {
  const posts = use(postsPromise);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
