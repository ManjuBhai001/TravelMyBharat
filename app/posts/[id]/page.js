export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return posts.map((post) => ({
    id: post.id.toString(), // Convert to string for dynamic routing
  }));
}

export default async function PostPage({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    {
      next: { revalidate: 60 }, // ISR: Revalidate every 60s
    }
  );

  const post = await res.json();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="mt-4 text-lg">{post.body}</p>
    </div>
  );
}
