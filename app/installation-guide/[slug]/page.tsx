import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { installationGuides } from "@/lib/guides";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return installationGuides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const guide = installationGuides.find((g) => g.slug === slug);
  if (!guide) return {};
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: `https://iptvgold.com/installation-guide/${guide.slug}` },
  };
}

export default async function GuidePage({ params }: Params) {
  const { slug } = await params;
  const guide = installationGuides.find((g) => g.slug === slug);
  if (!guide) notFound();

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://iptvgold.com" },
      { "@type": "ListItem", position: 2, name: "Installation Guides", item: "https://iptvgold.com/installation-guide" },
      { "@type": "ListItem", position: 3, name: guide.device, item: `https://iptvgold.com/installation-guide/${guide.slug}` },
    ],
  };

  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: guide.title,
    description: guide.metaDescription,
    step: guide.sections
      .filter((s) => s.steps)
      .flatMap((s) =>
        s.steps!.map((step, i) => ({
          "@type": "HowToStep",
          name: step.slice(0, 60),
          text: step,
        }))
      ),
  };

  const otherGuides = installationGuides.filter((g) => g.slug !== slug).slice(0, 4);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }} />

      <section className="hero-gradient pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-[#1a6fde]">Home</Link>
            <span>/</span>
            <Link href="/installation-guide" className="hover:text-[#1a6fde]">Installation Guides</Link>
            <span>/</span>
            <span className="text-gray-700">{guide.device}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900">
            {guide.title}
          </h1>
          <p className="text-lg text-gray-600">{guide.intro}</p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            <div className="prose-iptv">
              {guide.sections.map((section, i) => (
                <div key={i}>
                  <h2>{section.heading}</h2>
                  <p>{section.body}</p>
                  {section.steps && (
                    <ol className="space-y-3 mb-6">
                      {section.steps.map((step, j) => (
                        <li key={j} className="flex gap-3 text-gray-600">
                          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1a6fde]/10 border border-[#1a6fde]/20 flex items-center justify-center text-sm font-bold text-[#1a6fde]">
                            {j + 1}
                          </span>
                          <span className="pt-0.5">{step}</span>
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              ))}

              <h2>Tips for the Best Experience</h2>
              <ul>
                {guide.tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>

              <h2>Compatible Devices</h2>
              <p>This guide covers the following {guide.device} models:</p>
              <ul>
                {guide.devices.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>

              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Start Streaming?</h3>
                <p className="text-gray-600 mb-4">Get your IPTVGOLD subscription and follow this guide to set up in minutes.</p>
                <Link href="/#pricing" className="btn-primary text-white font-semibold px-6 py-3 rounded-full inline-block">
                  View Plans & Pricing
                </Link>
              </div>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6 shadow-sm">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Other Guides</h3>
                  <ul className="space-y-3">
                    {otherGuides.map((g) => (
                      <li key={g.slug}>
                        <Link href={`/installation-guide/${g.slug}`} className="text-sm text-gray-600 hover:text-[#1a6fde] transition-colors">
                          {g.device}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Need Help?</h3>
                  <p className="text-sm text-gray-600 mb-4">Our support team is available 24/7 to help with installation.</p>
                  <a href="mailto:support@iptvgold.com" className="text-sm font-semibold text-[#1a6fde] hover:text-[#3b8ef3]">
                    Contact Support →
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
