import Link from "next/link";

const programs = [
  {
    icon: <EducationIcon />,
    title: "Education Support",
    desc: "Providing access to quality education and learning resources.",
  },
  {
    icon: <MentorIcon />,
    title: "Mentorship",
    desc: "Connecting boys with positive role models and mentors for guidance.",
  },
  {
    icon: <LifeSkillsIcon />,
    title: "Life Skills Training",
    desc: "Equipping boys with essential life skills for personal and professional growth.",
  },
  {
    icon: <CommunityIcon />,
    title: "Community Engagement",
    desc: "Involving families and communities to create a supportive environment.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Mobile / small screens: stacked header then grid */}
        {/* Desktop: 5-col — left label col + 4 program cards */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 items-start">
          {/* Left: section heading */}
          <div className="lg:w-56 shrink-0">
            <p className="eyebrow">Our Programs</p>
            <h2 className="section-title">
              Program Areas
              <span className="accent">That Change Lives</span>
            </h2>
          </div>

          {/* Right: 4-column card grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((p, i) => (
              <ProgramCard key={i} {...p} />
            ))}
          </div>
        </div>

        {/* See all CTA */}
        <div className="mt-12 text-center">
          <Link
            href="#involved"
            className="inline-flex items-center gap-2 border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white font-bold px-8 py-3.5 rounded transition-all duration-200"
          >
            Get Involved
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProgramCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 hover:border-brand-mid hover:shadow-lg transition-all duration-300 cursor-pointer">
      {/* Icon */}
      <div className="w-16 h-16 rounded-full bg-brand-light group-hover:bg-brand-mid flex items-center justify-center mb-5 transition-colors duration-300">
        <span className="text-brand group-hover:text-white transition-colors duration-300">
          {icon}
        </span>
      </div>

      <h3 className="font-display font-bold text-base text-gray-900 mb-2 leading-snug">
        {title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}

/* ── Program icons ── */
function EducationIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-4-3.5l4 1.5 4-1.5"
      />
    </svg>
  );
}

function MentorIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87M12 12a4 4 0 100-8 4 4 0 000 8zm6 0a3 3 0 100-6 3 3 0 000 6zm-12 0a3 3 0 100-6 3 3 0 000 6z"
      />
    </svg>
  );
}

function LifeSkillsIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function CommunityIcon() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  );
}
