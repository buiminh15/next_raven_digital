import Link from "next/link";
import { Post } from "src/api/types";

async function getData(): Promise<Post[]> {
  const productsResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const products = await productsResponse.json();

  return products;
}

export default async function Blogs() {
  const products = await getData();
  return (
    <div className="mx-auto flex max-w-xl flex-col gap-10 py-10">
      {products.map((p) => (
        <Link href={`/blogs/${p.id}`} key={p.id}>
          <div className="cursor-pointer rounded border-2 border-primary p-10 transition-transform duration-200 ease-linear hover:scale-105 hover:transition hover:duration-300 hover:ease-in">
            <h4 className="text-2xl font-medium">{p.title}</h4>
            <p>{p.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
