import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        aria-hidden="true"
      />

      {/* Gradient overlay — strong left fade so text pops, transparent right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(5,30,15,0.85) 0%, rgba(5,30,15,0.60) 45%, rgba(5,30,15,0.10) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle bottom vignette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(to top, rgba(5,30,15,0.4), transparent)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <p className="text-brand-mid text-xs font-bold tracking-[0.2em] uppercase mb-5">
            Racville Education Foundation
          </p>

          {/* Headline */}
          <h1 className="font-display font-black leading-[1.05] mb-6">
            <span className="block text-white text-5xl md:text-6xl lg:text-7xl">
              Building
            </span>
            <span className="block text-white text-5xl md:text-6xl lg:text-7xl">
              Better Men
            </span>
            <span className="block text-brand-mid text-5xl md:text-6xl lg:text-7xl">
              for Tomorrow
            </span>
          </h1>

          {/* Sub-copy */}
          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-10 max-w-md">
            Empowering boys through mentorship, education, and character
            development to become leaders in their communities.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#donate"
              className="inline-flex items-center gap-2 bg-brand-btn hover:bg-brand text-white font-bold px-7 py-3.5 rounded transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <HeartIcon />
              Donate Now
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-7 py-3.5 rounded transition-all duration-200 hover:bg-white hover:text-brand-dark"
            >
              Learn More
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeartIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
