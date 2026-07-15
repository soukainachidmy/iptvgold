import type { Metadata } from "next";
import Link from "next/link";
import { installationGuides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "IPTV Installation Guides — All Devices | IPTVGOLD",
  description:
    "Complete IPTV installation guides for Firestick, Smart TV, Android, iOS, Apple TV, Roku, Formuler, Buzz TV, and more. Step-by-step setup with IPTVGOLD.",
  alternates: { canonical: "https://iptvgold.com/installation-guide" },
};

export default function InstallationGuideIndex() {
  return (
    <>
      <section className="hero-gradient pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Installation <span className="gradient-text">Guides</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Step-by-step guides to set up IPTVGOLD on any device. Choose your device below to get started.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {installationGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/installation-guide/${guide.slug}`}
                className="card-hover bg-white border border-gray-200 rounded-2xl p-8 group shadow-sm"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1a6fde] to-[#3b8ef3] flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                  📺
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{guide.device}</h2>
                <p className="text-sm text-gray-600 mb-4">{guide.metaDescription.slice(0, 100)}...</p>
                <span className="text-sm font-semibold text-[#1a6fde] group-hover:text-[#3b8ef3]">
                  Read guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
