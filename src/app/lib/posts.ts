"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export interface Post {
  id: number;
  slug: string;
  title: string;
  content: string;
}

// In-memory posts
const POSTS = {
  headId: 2,
  data: [
    {
      id: 1,
      slug: "hello-world",
      title: "Hello world",
      content: "Post 1",
    },
    {
      id: 2,
      slug: "hello-world-again",
      title: "Hello world again",
      content: "Post 2",
    },
  ],
};

export async function getPosts(): Promise<Post[]> {
  return Promise.resolve(POSTS.data);
}

const slugify = (title: string) =>
  title
    .split(" ")
    .map((token) => token.toLowerCase())
    .join("-");

function ensureString(value: FormDataEntryValue | null): string {
  if (value === null) throw new Error("Required value is missing");
  if (value instanceof File) throw new Error("Expected string but got File");
  return value;
}

export async function createPost(formData: FormData) {
  const title = ensureString(formData.get("title"));
  const content = ensureString(formData.get("content"));

  const slug = slugify(title);
  const newHeadId = POSTS.headId + 1;
  const newPost: Post = {
    id: newHeadId,
    title,
    slug,
    content,
  };

  console.log({ newPost });

  POSTS.headId = newHeadId;
  POSTS.data.push(newPost);

  // return Promise.resolve(newPost)
  revalidatePath("/blog");
  redirect("/blog");
}

export async function createError(prevState: any, formData: FormData) {
  return { message: "Failed!" };
}

export async function getPostBySlug(slug: string) {
  return POSTS.data.find((post) => post.slug === slug);
}
