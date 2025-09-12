import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

const postsDirectory = path.join(process.cwd(), "content/blog");

function getPosts() {
  if (!fs.existsSync(postsDirectory)) return [];
  const files = fs.readdirSync(postsDirectory);
  return files.filter((f) => f.endsWith(".md")).map((file) => {
    const filePath = path.join(postsDirectory, file);
    const { data } = matter(fs.readFileSync(filePath, "utf8"));
    return {
      slug: file.replace(/\.md$/, ""),
      title: data.title || file,
      date: data.date || "",
    };
  });
}

export default function BlogPage() {
  const posts = getPosts();
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-white dark:from-secondary dark:via-gray-900 dark:to-secondary overflow-hidden">
      {/* Decorative blurred background shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-400 opacity-20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-10 text-center">Blog</h1>
        {posts.length === 0 ? (
          <p className="text-center text-gray-500">No posts yet.</p>
        ) : (
          <ul className="space-y-6">
            {posts.map((post) => (
              <li key={post.slug} className="bg-white/90 dark:bg-secondary/90 rounded-3xl shadow-2xl p-6 border border-gray-100 dark:border-gray-800 backdrop-blur-md">
                <Link href={`/blog/${post.slug}`} className="text-xl font-bold text-primary hover:underline">
                  {post.title}
                </Link>
                <div className="text-xs text-gray-400 mt-1">{post.date}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
