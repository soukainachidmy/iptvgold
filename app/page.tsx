import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "IPTVGOLD — Premium IPTV Subscription | 18,000+ Live Channels in 4K UHD",
  description:
    "IPTVGOLD delivers premium IPTV with 18,000+ live channels, 60,000+ VOD movies and series, 4K UHD quality, and 99.9% uptime. Works on Firestick, Smart TV, Android, iOS, Apple TV, and more.",
  alternates: { canonical: "https://iptvgold.com" },
};

const features = [
  { icon: "📺", title: "18,000+ Live Channels", desc: "Access thousands of live TV channels from around the world in HD and 4K UHD quality." },
  { icon: "🎬", title: "60,000+ VOD Library", desc: "Movies and series on demand, updated daily with the latest releases and classics." },
  { icon: "⚡", title: "99.9% Uptime", desc: "Enterprise-grade servers with anti-freeze technology for buffer-free streaming." },
  { icon: "🛡️", title: "Premium Servers", desc: "High-speed servers across Europe, North America, and Asia for zero-lag streaming." },
  { icon: "📱", title: "All Devices Supported", desc: "Firestick, Smart TV, Android, iOS, Apple TV, Roku, Formuler, Buzz TV, and more." },
  { icon: "🌍", title: "Global Content", desc: "Channels from USA, UK, Canada, Europe, Middle East, Asia, and Latin America." },
];

const plans = [
  {
    name: "1 Month",
    price: "$15",
    period: "/month",
    features: ["18,000+ Live Channels", "60,000+ VOD Movies & Series", "4K UHD Quality", "All Devices Supported", "24/7 Support", "Anti-Freeze Technology"],
    popular: false,
  },
  {
    name: "3 Months",
    price: "$35",
    period: "/3 months",
    features: ["18,000+ Live Channels", "60,000+ VOD Movies & Series", "4K UHD Quality", "All Devices Supported", "24/7 Priority Support", "Anti-Freeze Technology", "Save 22%"],
    popular: true,
  },
  {
    name: "6 Months",
    price: "$60",
    period: "/6 months",
    features: ["18,000+ Live Channels", "60,000+ VOD Movies & Series", "4K UHD Quality", "All Devices Supported", "24/7 Priority Support", "Anti-Freeze Technology", "Save 33%"],
    popular: false,
  },
  {
    name: "12 Months",
    price: "$99",
    period: "/year",
    features: ["18,000+ Live Channels", "60,000+ VOD Movies & Series", "4K UHD Quality", "All Devices Supported", "24/7 VIP Support", "Anti-Freeze Technology", "Save 45% — Best Value"],
    popular: false,
  },
];

const streamingServices = [
  "Netflix", "Disney+", "HBO Max", "Amazon Prime", "Apple TV+", "Paramount+",
  "ESPN", "Sky Sports", "beIN Sports", "DAZN", "Hulu", "Peacock",
];

const faqs = [
  { q: "What is IPTVGOLD IPTV?", a: "IPTVGOLD is a premium IPTV subscription service that gives you access to 18,000+ live TV channels and 60,000+ VOD movies and series in HD and 4K UHD quality, streamed over the internet to any compatible device." },
  { q: "Which devices are compatible with IPTVGOLD?", a: "IPTVGOLD works on Amazon Firestick, Smart TVs (Samsung, LG), Android devices, iOS (iPhone/iPad), Apple TV, Roku, Formuler, Buzz TV, and any device that supports IPTV players like IPTV Smarters Pro or TiviMate." },
  { q: "How many channels are included?", a: "Our subscription includes over 18,000 live channels from the USA, UK, Canada, Europe, Middle East, Asia, and Latin America, plus 60,000+ on-demand movies and TV series." },
  { q: "Do you offer a free trial?", a: "Yes, we offer a 24-hour free trial so you can test the service before committing. Contact our support team to request your trial." },
  { q: "How fast does my internet need to be?", a: "For HD streaming, we recommend a minimum of 10 Mbps. For 4K UHD streaming, a stable connection of 25 Mbps or higher is recommended for the best experience." },
  { q: "Is there a refund policy?", a: "We offer a satisfaction guarantee. If you experience technical issues that we cannot resolve within 24 hours, you may request a refund within the first 7 days of your subscription." },
];

export default function HomePage() {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "IPTVGOLD Premium IPTV Subscription",
    provider: { "@type": "Organization", name: "IPTVGOLD" },
    description: "Premium IPTV subscription with 18,000+ live channels and 60,000+ VOD.",
    offers: plans.map((p) => ({
      "@type": "Offer",
      name: `${p.name} subscription`,
      price: p.price.replace("$", ""),
      priceCurrency: "USD",
    })),
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1a6fde]/20 rounded-full blur-[120px] float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3b8ef3]/10 rounded-full blur-[120px] float" style={{ animationDelay: "2s" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a6fde]/10 border border-[#1a6fde]/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium text-[#3b8ef3]">99.9% Uptime — Streaming Now</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-6 text-white">
                Premium <span className="gradient-text">IPTV</span> Subscription
                <br />
                <span className="gradient-gold">18,000+</span> Live Channels
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-10">
                Stream 18,000+ live TV channels and 60,000+ VOD movies & series in stunning 4K UHD.
                Works on Firestick, Smart TV, Android, iOS, Apple TV, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <a href="#pricing" className="btn-primary text-white font-semibold px-8 py-4 rounded-full text-lg pulse-glow">
                  View Plans & Pricing
                </a>
                <a href="#trial" className="border border-[#1a6fde]/40 text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-[#1a6fde]/10 transition-colors">
                  Get Free 24h Trial
                </a>
              </div>
              <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 text-gray-500">
                <div className="flex items-center gap-2"><span className="text-[#3b8ef3]">✓</span> No Contracts</div>
                <div className="flex items-center gap-2"><span className="text-[#3b8ef3]">✓</span> Instant Activation</div>
                <div className="flex items-center gap-2"><span className="text-[#3b8ef3]">✓</span> 24/7 Support</div>
                <div className="flex items-center gap-2"><span className="text-[#3b8ef3]">✓</span> 4K UHD Quality</div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 hover:border-[#3b8ef3]/50 transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#070710] to-transparent opacity-40 z-10" />
                <Image
                  src="/images/hero_devices.png"
                  alt="IPTVGOLD compatible devices including Smart TV, Tablet, and Smartphone streaming in 4K UHD"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-w-1024px) 100vw, 500px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Streaming Logos */}
      <section className="py-12 border-y border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 uppercase tracking-wider mb-8">
            All your favorite streaming services in one subscription
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {streamingServices.map((s) => (
              <span key={s} className="streaming-logo text-xl font-bold text-gray-400">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900">
              Why Choose <span className="gradient-text">IPTVGOLD</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver the best IPTV experience with premium servers, anti-freeze technology, and unbeatable channel selection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="card-hover bg-white border border-gray-200 rounded-2xl p-8">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-extrabold gradient-text mb-2">18K+</div>
              <p className="text-gray-600 font-medium">Live Channels</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-extrabold gradient-text mb-2">60K+</div>
              <p className="text-gray-600 font-medium">VOD Movies & Series</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-extrabold gradient-text mb-2">99.9%</div>
              <p className="text-gray-600 font-medium">Server Uptime</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-extrabold gradient-text mb-2">50K+</div>
              <p className="text-gray-600 font-medium">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* VOD & Channels Showcase */}
      <section className="py-20 bg-white overflow-hidden border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Left */}
            <div className="lg:col-span-6 relative flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-[550px] aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 hover:border-[#1a6fde]/40 transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent z-10" />
                <Image
                  src="/images/movie_category.png"
                  alt="Huge selection of films, series and documentaries updated daily in HD and 4K"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-w-1024px) 100vw, 550px"
                />
              </div>
            </div>

            {/* Content Right */}
            <div className="lg:col-span-6 text-center lg:text-left order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-gray-900">
                Massive <span className="gradient-text">60,000+</span> VOD Library
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Enjoy a massive collection of movies and series updated daily. From the latest blockbusters and trending TV shows to your favorite classics, everything is available on demand in 4K UHD and Full HD quality with multi-language subtitles.
              </p>
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <span className="text-2xl">🎬</span>
                  <div className="text-left">
                    <div className="font-bold text-gray-900">Daily Updates</div>
                    <div className="text-xs text-gray-500">New content daily</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <span className="text-2xl">🌍</span>
                  <div className="text-left">
                    <div className="font-bold text-gray-900">Multi-Sub</div>
                    <div className="text-xs text-gray-500">Subtitles in all languages</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <span className="text-2xl">⚽</span>
                  <div className="text-left">
                    <div className="font-bold text-gray-900">Live Sports</div>
                    <div className="text-xs text-gray-500">All major leagues & PPV</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <span className="text-2xl">🍿</span>
                  <div className="text-left">
                    <div className="font-bold text-gray-900">No Extra Cost</div>
                    <div className="text-xs text-gray-500">Included in all plans</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 lg:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900">
              Simple, <span className="gradient-text">Transparent</span> Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that works for you. No hidden fees, no contracts. Cancel anytime.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 ${plan.popular ? "pricing-popular relative" : "bg-white border border-gray-200 shadow-sm"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="channel-count-badge px-4 py-1.5 rounded-full text-xs uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? "text-green-900" : "text-gray-900"}`}>{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`text-4xl font-extrabold ${plan.popular ? "text-green-950" : "text-gray-900"}`}>{plan.price}</span>
                  <span className={plan.popular ? "text-green-800" : "text-gray-500"}>{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className={`flex items-start gap-2 text-sm ${plan.popular ? "text-green-900" : "text-gray-600"}`}>
                      <span className={`${plan.popular ? "text-green-600" : "text-[#3b8ef3]"} mt-0.5`}>✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <a
                  href="#trial"
                  className={`block text-center font-semibold px-6 py-3 rounded-full transition-all ${
                    plan.popular
                      ? "btn-primary text-white"
                      : "border border-[#1a6fde] text-[#1a6fde] hover:bg-[#1a6fde]/5"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Trial CTA */}
      <section id="trial" className="py-20 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-10 lg:p-16 text-center">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#1a6fde]/10 rounded-full blur-[100px]" />
            </div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900">
                Try IPTVGOLD <span className="gradient-gold">Free</span> for 24 Hours
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
                Experience premium IPTV with no commitment. Test all channels and VOD before you buy.
              </p>
              <a href="mailto:support@iptvgold.com?subject=Free Trial Request" className="btn-primary text-white font-semibold px-8 py-4 rounded-full text-lg inline-block">
                Request Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-gray-655 text-gray-600">Everything you need to know about IPTVGOLD.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-[#1a6fde]/30 transition-colors">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.q}</h3>
                  <svg className="w-5 h-5 text-[#3b8ef3] flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50 border-t border-gray-200 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Questions? Our support team is available 24/7 to help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:support@iptvgold.com" className="btn-primary text-white font-semibold px-8 py-4 rounded-full">
              support@iptvgold.com
            </a>
            <a href="https://wa.me/1234567890" className="border border-[#1a6fde]/40 text-[#1a6fde] font-semibold px-8 py-4 rounded-full hover:bg-[#1a6fde]/5 transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
