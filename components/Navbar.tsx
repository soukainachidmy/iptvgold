"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

const installationGuides = [
  { href: "/installation-guide/amazon-firestick", label: "Amazon Firestick" },
  { href: "/installation-guide/iptv-smarters-pro", label: "IPTV Smarters Pro" },
  { href: "/installation-guide/apple-tv", label: "Apple TV" },
  { href: "/installation-guide/android-devices", label: "Android Devices" },
  { href: "/installation-guide/samsung-smart-tv", label: "Samsung Smart TV" },
  { href: "/installation-guide/buzz-tv", label: "Buzz TV" },
  { href: "/installation-guide/formuler", label: "Formuler" },
  { href: "/installation-guide/roku", label: "Roku" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [installOpen, setInstallOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/95 backdrop-blur-md shadow-lg shadow-blue-900/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1a6fde] to-[#3b8ef3] flex items-center justify-center font-extrabold text-white text-lg group-hover:scale-110 transition-transform">
              IG
            </div>
            <span className="text-xl font-extrabold tracking-tight">
              IPTV<span className="gradient-text">GOLD</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setInstallOpen(true)}
              onMouseLeave={() => setInstallOpen(false)}
            >
              <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                Installation Guides
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {installOpen && (
                <div className="nav-dropdown absolute top-full left-0 pt-2 w-64">
                  <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl shadow-2xl p-2">
                    {installationGuides.map((guide) => (
                      <Link
                        key={guide.href}
                        href={guide.href}
                        className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-[#1a6fde]/10 rounded-lg transition-colors"
                      >
                        {guide.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setLegalOpen(true)}
              onMouseLeave={() => setLegalOpen(false)}
            >
              <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                Legal
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {legalOpen && (
                <div className="nav-dropdown absolute top-full left-0 pt-2 w-48">
                  <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl shadow-2xl p-2">
                    {legalLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-[#1a6fde]/10 rounded-lg transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/#pricing"
              className="btn-primary text-white text-sm font-semibold px-6 py-2.5 rounded-full"
            >
              Get Started
            </Link>
          </div>

          <button
            className="lg:hidden text-gray-300"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-[#1a6fde]/10 rounded-lg"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Installation Guides
            </div>
            {installationGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="block px-6 py-2 text-sm text-gray-300 hover:text-white hover:bg-[#1a6fde]/10 rounded-lg"
                onClick={() => setOpen(false)}
              >
                {guide.label}
              </Link>
            ))}
            <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Legal
            </div>
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-6 py-2 text-sm text-gray-300 hover:text-white hover:bg-[#1a6fde]/10 rounded-lg"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#pricing"
              className="block btn-primary text-white text-center font-semibold px-6 py-3 rounded-full mt-3"
              onClick={() => setOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
