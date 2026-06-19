import Link from "next/link";

const footerLinks = {
  "Quick Links": ["Home", "About Us", "Our Programs", "Get Involved", "Gallery", "Contact"],
  "Programs":    ["Education Support", "Mentorship", "Life Skills Training", "Community Engagement"],
  "Connect":     ["Facebook", "Twitter / X", "Instagram", "LinkedIn", "YouTube"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand col */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-brand-dark rounded flex items-center justify-center shrink-0">
                <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5">
                  <rect x="4" y="8" width="11" height="16" rx="1" fill="white" opacity=".9"/>
                  <rect x="17" y="8" width="11" height="16" rx="1" fill="white" opacity=".6"/>
                  <path d="M16 24V10" stroke="#2db84b" strokeWidth="1.5"/>
                  <path d="M16 14 C16 14 13 11 10 12" stroke="#2db84b" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M16 17 C16 17 19 14 22 15" stroke="#2db84b" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <span className="block font-display font-black text-white text-sm tracking-wide uppercase">Racville</span>
                <span className="block text-[9px] font-semibold tracking-widest text-brand-mid uppercase">Education Foundation</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering boys through mentorship, education, and character development since 2010.
            </p>
            {/* Newsletter mini */}
            <p className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Stay Updated</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-mid"
              />
              <button className="bg-brand-btn hover:bg-brand text-white text-sm font-bold px-4 py-2 rounded transition-colors">
                →
              </button>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-bold text-sm mb-4 tracking-wide">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l}>
                    <Link
                      href="#"
                      className="text-sm hover:text-brand-mid transition-colors"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>© {new Date().getFullYear()} Racville Education Foundation. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-brand-mid transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-mid transition-colors">Terms of Use</Link>
            <Link href="#" className="hover:text-brand-mid transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
