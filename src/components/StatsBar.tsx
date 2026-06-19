const stats = [
  {
    icon: <PeopleIcon />,
    value: "500+",
    label: "Boys Mentored",
    sub: "Guided and inspired to become their best.",
  },
  {
    icon: <GlobeIcon />,
    value: "12",
    label: "Communities",
    sub: "Making a difference in 12 communities.",
  },
  {
    icon: <BookIcon />,
    value: "100%",
    label: "Commitment",
    sub: "Dedicated to building a brighter future.",
  },
  {
    icon: <HeartIcon />,
    value: "You",
    label: "Can Help",
    sub: "Your support can change a boy's life today.",
  },
];

export default function StatsBar() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-8 py-10 hover:bg-brand-light transition-colors duration-200 group"
            >
              {/* Icon circle */}
              <div className="w-14 h-14 rounded-full bg-brand-light group-hover:bg-white flex items-center justify-center mb-4 transition-colors duration-200">
                <span className="text-brand">{s.icon}</span>
              </div>

              {/* Value */}
              <span className="font-display font-black text-3xl text-gray-900 leading-none mb-1">
                {s.value}
              </span>

              {/* Label */}
              <span className="text-sm font-bold text-gray-800 mb-2">{s.label}</span>

              {/* Sub-text */}
              <p className="text-xs text-gray-500 leading-relaxed max-w-[140px]">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Icons ── */
function PeopleIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87M12 12a4 4 0 100-8 4 4 0 000 8zm6 0a3 3 0 100-6 3 3 0 000 6zm-12 0a3 3 0 100-6 3 3 0 000 6z"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 012-2h1.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h3A2.5 2.5 0 0016 5.5V3.935M12 21a9 9 0 100-18 9 9 0 000 18z"
      />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
    </svg>
  );
}
