import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const { default: Post } = await import(`@/content/${slug}.md`);
    return <Post />;
  } catch (e) {
    console.log(e);
    notFound();
  }
}

export function generateStaticParams() {
  return [{ slug: "about" }];
}

// This forces any slug not matching the ones from `generateStaticParams` to 404
// export const dynamicParams = false;
