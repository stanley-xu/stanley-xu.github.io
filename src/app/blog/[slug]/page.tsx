import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  console.log({ slug, search: slug, found: post });

  if (!post) {
    notFound();
  }

  return <div>{post.title}</div>;
}
