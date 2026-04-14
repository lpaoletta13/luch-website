import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const projects = [
  {
    href: "/projects/dcf",
    title: "DCF Valuation",
    company: "Mondelez International · MDLZ",
    tags: ["Financial Modeling", "Valuation", "Excel"],
    description:
      "Detailed discounted cash flow model with assumption analysis and sensitivity breakdown.",
  },
  {
    href: "/projects/stock-pitch",
    title: "Stock Pitch",
    company: "Mondelez International · MDLZ",
    tags: ["Equity Research", "Investment Thesis", "Valuation"],
    description:
      "Investment thesis, risk analysis, and valuation framework for a selected public company.",
  },
];

export default function Home() {
  return (
    <main className="bg-[#0a0f1c] text-white">

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 bg-grid">
        {/* Radial glow — top right */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-80px',
            width: '800px',
            height: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.3) 0%, rgba(30,58,138,0.14) 40%, transparent 68%)',
            pointerEvents: 'none',
          }}
        />
        <div className="relative text-center max-w-2xl">
          <h1 className="hero-line-1 text-6xl md:text-7xl font-semibold tracking-tight bg-gradient-to-r from-white via-blue-100 to-gray-400 bg-clip-text text-transparent mb-3 leading-tight">
            Luciano Paoletta
          </h1>
          <p className="hero-line-2 text-sm text-gray-400 mb-1 tracking-wide">
            Bentley University
          </p>
          <p className="hero-line-3 text-sm text-gray-500 mb-8 tracking-wide">
            Finance Major&nbsp;&nbsp;|&nbsp;&nbsp;Computer Science Minor
          </p>
          <p className="hero-line-4 text-lg text-gray-400 mb-10 leading-relaxed max-w-lg mx-auto">
            Interested in company analysis, valuation, and financial modeling.
          </p>
          <div className="hero-line-5 flex gap-4 justify-center flex-wrap">
            <Link
              href="/projects"
              className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:border-white/50 hover:bg-white/5 transition-all duration-200"
            >
              Get in Touch
            </Link>
          </div>
          <div className="mt-20 flex flex-col items-center opacity-20">
            <div className="w-px h-8 bg-white/40 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-8 py-28 max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-medium mb-4">About</p>
          <h2 className="text-3xl font-semibold mb-8 leading-snug">
            Turning data and assumptions into structured investment frameworks.
          </h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            I&apos;ve spent time building financial models, analyzing companies, and working with data to support decision-making. I like thinking through what actually drives performance and where value comes from, and I&apos;m always looking to get better at that.
          </p>
        </FadeIn>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      {/* Featured Projects */}
      <section className="px-8 py-28 max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-medium mb-2">Work</p>
              <h2 className="text-3xl font-semibold">Featured Projects</h2>
            </div>
            <Link href="/projects" className="text-sm text-gray-400 hover:text-white transition group">
              View all <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.href} delay={i * 100}>
              <Link href={project.href} className="block h-full">
                <div className="group h-full bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-gray-900/80 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 cursor-pointer">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 font-medium tracking-wide border border-blue-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-100 transition-colors">{project.title}</h3>
                  <p className="text-xs text-gray-500 mb-3 tracking-wide">{project.company}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                  <div className="mt-6 text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    View project →
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <FadeIn>
        <section className="px-8 pb-28 max-w-5xl mx-auto">
          <div className="relative rounded-2xl border border-gray-800 bg-gray-900/40 px-12 py-14 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-transparent pointer-events-none" />
            <h2 className="text-2xl font-semibold mb-3">Interested in working together?</h2>
            <p className="text-gray-400 mb-8 max-w-sm mx-auto text-sm leading-relaxed">
              Reach out if you want to connect, collaborate, or talk markets.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </FadeIn>

    </main>
  );
}
