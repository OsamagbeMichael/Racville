import Link from "next/link";

export default function CTABand() {
  return (
    <section id="donate" className="bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-12 md:divide-x md:divide-white/20">
          {/* Left: tagline */}
          <div className="flex items-center gap-5 md:pr-12">
            {/* Hands icon */}
            <div className="shrink-0 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
              <svg className="w-7 h-7 text-brand-mid" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>
              </svg>
            </div>
            <div>
              <p className="text-white font-display font-black text-xl md:text-2xl leading-tight">
                Together, We Can Build{" "}
                <span className="text-brand-mid">Better Men for Tomorrow.</span>
              </p>
            </div>
          </div>

          {/* Middle: description */}
          <div className="md:px-12 text-center md:text-left max-w-xs">
            <p className="text-white/70 text-sm leading-relaxed">
              Your donation helps us provide education, mentorship, and
              opportunities that transform lives and communities.
            </p>
          </div>

          {/* Right: CTA */}
          <div className="md:pl-12 shrink-0">
            <Link
              href="#donate-form"
              className="inline-flex items-center gap-2 bg-white hover:bg-brand-light text-brand-dark font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
            >
              <svg className="w-5 h-5 text-brand-mid" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
              </svg>
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
