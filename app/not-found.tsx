import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-8xl font-extrabold gradient-text mb-4">404</div>
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">Page Not Found</h1>
        <p className="text-lg text-gray-400 mb-8">
          The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary text-white font-semibold px-8 py-4 rounded-full">
            Back to Home
          </Link>
          <Link href="/blog" className="border border-[#1a6fde]/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-[#1a6fde]/10 transition-colors">
            Read Our Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
