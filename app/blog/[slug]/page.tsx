import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    authors: [{ name: post.author }],
    alternates: { canonical: `https://iptvgold.com/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    author: {
      "@type": "Person",
      name: post.author,
      description: post.authorCredentials,
    },
    publisher: {
      "@type": "Organization",
      name: "IPTVGOLD",
      logo: { "@type": "ImageObject", url: "https://iptvgold.com/icon.svg" },
    },
    datePublished: post.date,
    dateModified: post.date,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://iptvgold.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://iptvgold.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://iptvgold.com/blog/${post.slug}` },
    ],
  };

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <article>
        <section className="hero-gradient pt-32 pb-12 lg:pt-40 lg:pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-[#3b8ef3]">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#3b8ef3]">Blog</Link>
              <span>/</span>
              <span className="text-gray-300 truncate">{post.category}</span>
            </nav>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-[#3b8ef3] bg-[#1a6fde]/10 border border-[#1a6fde]/30 mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-gray-400 mb-6">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1a6fde] to-[#3b8ef3] flex items-center justify-center text-sm font-bold text-white">
                  {post.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-white font-medium">{post.author}</p>
                  <p className="text-xs text-gray-500">{post.authorCredentials}</p>
                </div>
              </div>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose-iptv">
              {post.content.map((section, i) => (
                <div key={i}>
                  {section.heading && <h2>{section.heading}</h2>}
                  {section.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-[#0d1a3a] to-[#0f2247] border border-[#1a6fde]/30">
              <h3 className="text-xl font-bold text-white mb-2">Ready to Start Streaming?</h3>
              <p className="text-gray-300 mb-4">
                Get your IPTVGOLD subscription with 18,000+ channels and 60,000+ VOD. Free 24-hour trial available.
              </p>
              <Link href="/#pricing" className="btn-primary text-white font-semibold px-6 py-3 rounded-full inline-block">
                View Plans & Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-16 bg-[#070710] border-t border-[#1e1e2e]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="card-hover bg-[#111118] border border-[#1e1e2e] rounded-2xl p-6 group">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-[#3b8ef3] bg-[#1a6fde]/10 border border-[#1a6fde]/30 mb-3">
                    {rp.category}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#3b8ef3] transition-colors">
                    {rp.title}
                  </h3>
                  <p className="text-sm text-gray-400">{rp.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
