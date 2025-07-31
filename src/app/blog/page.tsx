import { Suspense } from "react";

export default async function Page() {
  // const posts = getPosts()
  // const posts = new Promise<Awaited<ReturnType<typeof getPosts>>>((resolve) => {
  //   setTimeout(() => {
  //     resolve(getPosts());
  //   }, 2000); // 2 second delay
  // });

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <h3>Blogs</h3>
          {/* <Posts posts={posts} /> */}
        </section>
      </Suspense>
      {/* <form action={createPost} className="flex flex-col gap-4">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" />
        <label htmlFor="content">Content</label>
        <textarea
          // id='content'
          name="content"
          placeholder="It was a dark stormy night..."
        />
        <button type="submit">Create</button>
      </form> */}
    </>
  );
}
