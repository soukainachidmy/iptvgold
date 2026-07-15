import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iptvgold-xi.vercel.app"),
  title: {
    default: "IPTVGOLD — Premium IPTV Subscription | 18,000+ Live Channels in 4K",
    template: "%s | IPTVGOLD",
  },
  description:
    "IPTVGOLD offers premium IPTV subscriptions with 18,000+ live channels, 60,000+ VOD movies and series, 4K UHD quality, and 99.9% uptime. Compatible with Firestick, Smart TV, Android, iOS, and more.",
  keywords: [
    "IPTV subscription",
    "premium IPTV",
    "live TV streaming",
    "4K IPTV",
    "IPTV service",
    "IPTVGOLD",
    "best IPTV provider",
    "IPTV for Firestick",
  ],
  authors: [{ name: "IPTVGOLD" }],
  creator: "IPTVGOLD",
  publisher: "IPTVGOLD",
  robots: { index: true, follow: true },
  verification: {
  google: "-0d4UHdgoVhqseIlqVp9C2URdr7iLyJhyr27PCvmjBw",
}
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iptvgold-xi.vercel.app",
    siteName: "IPTVGOLD",
    title: "IPTVGOLD — Premium IPTV Subscription | 18,000+ Live Channels",
    description:
      "Premium IPTV with 18,000+ live channels, 60,000+ VOD, 4K UHD quality. All devices supported.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTVGOLD — Premium IPTV Subscription",
    description:
      "18,000+ live channels, 60,000+ VOD, 4K UHD quality. All devices supported.",
  },
  alternates: { canonical: "https://iptvgold-xi.vercel.app" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "IPTVGOLD",
    url: "https://iptvgold-xi.vercel.app",
    logo: "https://iptvgold.com/icon.svg",
    description:
      "Premium IPTV subscription provider with 18,000+ live channels and 60,000+ VOD.",
    sameAs: [
      "https://www.facebook.com/iptvgold",
      "https://twitter.com/iptvgold",
      "https://www.instagram.com/iptvgold",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
