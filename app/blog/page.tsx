import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "IPTV Blog — Guides, Tips & Reviews | IPTVGOLD",
  description:
    "Read the IPTVGOLD blog for IPTV guides, troubleshooting tips, player app reviews, and comparisons. Learn how to get the most from your IPTV subscription.",
  alternates: { canonical: "https://iptvgold.com/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <section className="hero-gradient pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            IPTV <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Guides, tips, reviews, and troubleshooting advice to help you get the most from your IPTV subscription.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <Link href={`/blog/${featured.slug}`} className="card-hover block bg-white border border-gray-200 rounded-2xl overflow-hidden mb-12 group shadow-sm">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="h-64 lg:h-auto bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-12">
                <div className="text-6xl">📖</div>
              </div>
              <div className="p-8 lg:p-10">
                <span className="channel-count-badge inline-block px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-4">
                  Featured
                </span>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-3 group-hover:text-[#1a6fde] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-600 mb-4">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{featured.author}</span>
                  <span>•</span>
                  <span>{featured.readTime}</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Rest of posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card-hover bg-white border border-gray-200 rounded-2xl p-8 group shadow-sm">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-[#1a6fde] bg-[#1a6fde]/5 border border-[#1a6fde]/20 mb-4">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#1a6fde] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
