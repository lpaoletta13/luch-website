import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const projects = [
  {
    href: "/projects/dcf",
    title: "DCF Valuation",
    company: "Mondelez International · MDLZ",
    description:
      "Detailed discounted cash flow model with assumption analysis and sensitivity breakdown. Includes WACC calculation, terminal value estimation, and scenario modeling.",
    tags: ["Financial Modeling", "Valuation", "Excel"],
  },
  {
    href: "/projects/stock-pitch",
    title: "Stock Pitch",
    company: "Mondelez International · MDLZ",
    description:
      "Investment thesis, risk analysis, and valuation framework for a selected public company. Full buyside-style write-up covering business model, competitive moat, and price target.",
    tags: ["Equity Research", "Investment Thesis", "Valuation"],
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-[#0a0f1c] text-white">

      {/* Header */}
      <section className="px-8 pt-24 pb-16 max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-medium mb-4">Work</p>
          <h1 className="text-4xl md:text-5xl font-semibold mb-5 tracking-tight">Selected Projects</h1>
          <p className="text-gray-400 max-w-md leading-relaxed">
            Focused work in equity research, valuation, and financial modeling.
          </p>
        </FadeIn>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      {/* Project Grid */}
      <section className="px-8 py-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.href} delay={i * 100}>
              <Link href={project.href} className="block h-full">
                <div className="group h-full bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-gray-900/80 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 font-medium tracking-wide border border-blue-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-xl font-semibold mb-1 group-hover:text-blue-100 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-xs text-gray-500 mb-3 tracking-wide">{project.company}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-6 text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    View project →
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

    </main>
  );
}
