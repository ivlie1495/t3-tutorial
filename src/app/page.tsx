import { db } from "~/server/db";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main>
      <div className="flex flex-wrap gap-4 p-4">
        {posts.map((post) => (
          <div key={post.id} className="flex flex-col gap-4 p-4">
            <p className="text-lg">{post.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export const dynamic = "force-dynamic";
