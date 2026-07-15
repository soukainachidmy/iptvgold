import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About IPTVGOLD — Premium IPTV Provider Since 2018",
  description:
    "Learn about IPTVGOLD, a premium IPTV subscription provider delivering 18,000+ live channels and 60,000+ VOD to 50,000+ customers worldwide with 99.9% uptime.",
  alternates: { canonical: "https://iptvgold.com/about" },
};

const team = [
  { name: "James Carter", role: "Founder & CEO", desc: "15+ years in streaming technology and telecommunications infrastructure." },
  { name: "Sophia Laurent", role: "Head of Support", desc: "Leads our 24/7 customer support team with expertise in IPTV troubleshooting." },
  { name: "Michael Chen", role: "Lead Server Engineer", desc: "Manages our global server network across 3 continents for maximum uptime." },
  { name: "Amira Hassan", role: "Content Curator", desc: "Ensures our 60,000+ VOD library stays updated with the latest releases." },
];

const milestones = [
  { year: "2018", title: "IPTVGOLD Founded", desc: "Started with a vision to provide affordable, high-quality IPTV to viewers worldwide." },
  { year: "2019", title: "10,000 Channels Milestone", desc: "Expanded our channel lineup to over 10,000 live channels across multiple regions." },
  { year: "2021", title: "4K UHD Launch", desc: "Introduced 4K UHD streaming with anti-freeze technology for premium quality." },
  { year: "2023", title: "50,000+ Customers", desc: "Reached 50,000+ active subscribers with a 99.9% uptime guarantee." },
  { year: "2025", title: "18,000+ Channels", desc: "Now offering 18,000+ live channels and 60,000+ VOD with global server coverage." },
];

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            About <span className="gradient-text">IPTVGOLD</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            We are a premium IPTV subscription provider delivering high-quality live TV streaming
            to customers across the globe since 2018.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-iptv">
            <h2>Our Story</h2>
            <p>
              <strong>IPTVGOLD</strong> was founded in 2018 with a simple mission: to provide reliable,
              high-quality IPTV streaming at an affordable price. We recognized that many viewers
              were frustrated with expensive cable subscriptions and limited channel selections,
              and we set out to change that.
            </p>
            <p>
              Today, we serve over 50,000 customers worldwide with access to <strong>18,000+ live channels</strong>
              and <strong>60,000+ VOD movies and series</strong>. Our premium servers are strategically
              located across Europe, North America, and Asia to ensure buffer-free streaming with
              99.9% uptime.
            </p>

            <h2>What We Do</h2>
            <p>
              IPTVGOLD provides IPTV subscriptions that work on virtually any device — Amazon Firestick,
              Smart TVs, Android and iOS devices, Apple TV, Roku, Formuler, Buzz TV, and more. We use
              enterprise-grade anti-freeze technology to deliver smooth, uninterrupted streaming in
              HD and 4K UHD quality.
            </p>
            <p>
              Our channel lineup covers content from the USA, UK, Canada, Europe, the Middle East,
              Asia, and Latin America — including sports, movies, news, entertainment, kids&apos;
              channels, and international programming.
            </p>

            <h2>Our Commitment</h2>
            <p>
              We are committed to transparency, reliability, and customer satisfaction. Our support
              team is available 24/7 to help with installation, troubleshooting, and any questions
              you may have. We offer a free 24-hour trial so you can test the service before committing,
              and a satisfaction guarantee on all subscriptions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-extrabold gradient-text mb-2">7+</div>
              <p className="text-gray-600 font-medium">Years of Service</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-extrabold gradient-text mb-2">50K+</div>
              <p className="text-gray-600 font-medium">Customers Worldwide</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-extrabold gradient-text mb-2">3</div>
              <p className="text-gray-600 font-medium">Continents Served</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-extrabold gradient-text mb-2">24/7</div>
              <p className="text-gray-600 font-medium">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <div className="relative">
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-[#1a6fde]/30" />
            {milestones.map((m, i) => (
              <div key={m.year} className={`relative flex gap-6 mb-10 ${i % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                <div className="hidden lg:block lg:w-1/2" />
                <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#1a6fde] border-4 border-white z-10" />
                <div className="ml-12 lg:ml-0 lg:w-1/2 lg:px-8">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 card-hover shadow-sm">
                    <span className="channel-count-badge inline-block px-3 py-1 rounded-full text-sm mb-3">{m.year}</span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{m.title}</h3>
                    <p className="text-gray-600 text-sm">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white border border-gray-200 rounded-2xl p-6 text-center card-hover shadow-sm">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1a6fde] to-[#3b8ef3] flex items-center justify-center text-2xl font-extrabold text-white mx-auto mb-4">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-[#3b8ef3] font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4 text-gray-900">
            Ready to <span className="gradient-text">Get Started</span>?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join 50,000+ satisfied customers streaming premium IPTV today.
          </p>
          <Link href="/#pricing" className="btn-primary text-white font-semibold px-8 py-4 rounded-full text-lg inline-block">
            View Plans & Pricing
          </Link>
        </div>
      </section>
    </>
  );
}
