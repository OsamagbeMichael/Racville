import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text column */}
          <div>
            <p className="eyebrow">About Us</p>

            <h2 className="section-title mb-6">
              Investing in Boys.
              <span className="accent">Transforming Futures.</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              At Racville Education Foundation, we believe every boy deserves
              the opportunity to learn, grow, and lead. We provide mentorship,
              quality education, and life skills training to help boys overcome
              challenges and build successful, purpose-driven lives.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Founded in 2010, our programs have reached over 500 boys across 12
              communities — equipping them with the tools, confidence, and
              character to become the men their families and communities need.
            </p>

            {/* Key pillars */}
            <ul className="space-y-3 mb-10">
              {[
                "Evidence-based mentorship curriculum",
                "Scholarships and academic support",
                "Character & leadership development",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-brand-mid flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="#programs"
              className="inline-flex items-center gap-2 bg-brand-dark hover:bg-brand text-white font-bold px-7 py-3.5 rounded transition-all duration-200 shadow hover:shadow-md hover:-translate-y-0.5"
            >
              Learn More About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Image column */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/about-boys.jpg"
                alt="Group of boys walking together in community"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl px-6 py-4 flex items-center gap-4 border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
              <div>
                <p className="font-display font-black text-2xl text-brand-dark leading-none">500+</p>
                <p className="text-xs text-gray-500 mt-0.5">Lives Changed</p>
              </div>
            </div>

            {/* Decorative green square */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-xl bg-brand-mid opacity-20 -z-10"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
