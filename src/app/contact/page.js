import FadeIn from "@/components/FadeIn";

const links = [
  {
    label: "Email",
    value: "lucianopaoletta13@gmail.com",
    href: "mailto:lucianopaoletta13@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/luciano-paoletta-a39968243",
    href: "https://www.linkedin.com/in/luciano-paoletta-a39968243",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1c] text-white">

      {/* Header */}
      <section className="px-8 pt-24 pb-16 max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-medium mb-4">Contact</p>
          <h1 className="text-4xl md:text-5xl font-semibold mb-5 tracking-tight">Get in Touch</h1>
          <p className="text-gray-400 leading-relaxed max-w-md">
            Open to connecting about opportunities, markets, or collaborations. Reach out any time.
          </p>
        </FadeIn>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      <section className="px-8 py-16 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 gap-4">
          {links.map((link, i) => (
            <FadeIn key={link.label} delay={i * 80}>
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-5 border border-gray-800 rounded-2xl bg-gray-900/40 p-6 hover:border-blue-400/30 hover:bg-gray-900/70 transition-all duration-200"
              >
                <div className="text-gray-400 group-hover:text-blue-400 transition-colors duration-200 flex-shrink-0">
                  {link.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-0.5">{link.label}</p>
                  <p className="text-white text-sm font-medium truncate group-hover:text-blue-100 transition-colors">{link.value}</p>
                </div>
                <div className="ml-auto text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>

    </main>
  );
}
