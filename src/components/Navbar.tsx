"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home",         href: "#" },
  { label: "About Us",     href: "#about" },
  { label: "Our Programs", href: "#programs" },
  { label: "Get Involved", href: "#involved" },
  { label: "Gallery",      href: "#gallery" },
  { label: "Contact",      href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          {/* Book + plant icon */}
          <div className="w-9 h-9 bg-brand-dark rounded flex items-center justify-center shrink-0">
            <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
              <rect x="4" y="8" width="11" height="16" rx="1" fill="white" opacity=".9"/>
              <rect x="17" y="8" width="11" height="16" rx="1" fill="white" opacity=".6"/>
              <path d="M16 24V10" stroke="#2db84b" strokeWidth="1.5"/>
              <path d="M16 14 C16 14 13 11 10 12" stroke="#2db84b" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M16 17 C16 17 19 14 22 15" stroke="#2db84b" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="leading-tight">
            <span className="block font-display font-black text-brand-dark text-sm tracking-wide uppercase">
              Racville
            </span>
            <span className="block text-[9px] font-semibold tracking-widest text-brand-mid uppercase">
              Education Foundation
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="text-sm font-medium text-gray-700 hover:text-brand transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="#donate"
          className="hidden md:inline-flex items-center gap-1.5 bg-brand-btn hover:bg-brand text-white text-sm font-bold px-5 py-2.5 rounded transition-all duration-200 shadow hover:shadow-md"
        >
          <HeartIcon />
          Donate Now
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-4">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-sm font-medium text-gray-700 hover:text-brand"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="#donate" className="btn-primary w-full justify-center mt-2">
                <HeartIcon /> Donate Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function HeartIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
    </svg>
  );
}
