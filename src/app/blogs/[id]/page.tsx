export async function generateStaticParams() {
  const postsResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const posts = await postsResponse.json();

  return posts.map((post: any) => ({
    id: String(post.id),
  }));
}

async function fetchPost(id: string) {
  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return postResponse.json();
}

export default async function BlogPost({ params, searchParams }: any) {
  const { id } = params;

  const post = await fetchPost(id);

  console.log("Rerendering BlogPost component");

  return (
    <div className="flex flex-col p-12">
      <h1 className="max-w-4xl text-5xl font-bold leading-tight">
        {post.title}
      </h1>
      <article className="mt-8 max-w-4xl text-lg font-medium text-gray-200">
        {post.body}
      </article>
    </div>
  );
}
