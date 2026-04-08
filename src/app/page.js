import Link from "next/link";

const projects = [
  {
    href: "/projects/dcf",
    title: "DCF Valuation",
    description:
      "Detailed discounted cash flow model with assumption analysis and sensitivity breakdown.",
  },
  {
    href: "/projects/stock-pitch",
    title: "Stock Pitch",
    description:
      "Investment thesis, risk analysis, and valuation framework for a selected public company.",
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        <div className="absolute w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl top-[-100px] right-[-200px] pointer-events-none" />
        <div className="relative text-center max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-blue-400 font-medium mb-6">
            Finance &amp; Technology
          </p>
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tight bg-gradient-to-r from-white via-blue-100 to-gray-400 bg-clip-text text-transparent mb-6">
            Luciano Paoletta
          </h1>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed">
            Finance major building analytical tools at the intersection of markets and technology.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/projects"
              className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:border-white/50 transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-8 pb-28 max-w-5xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-blue-400 font-medium mb-2">Work</p>
            <h2 className="text-3xl font-semibold">Featured Projects</h2>
          </div>
          <Link href="/projects" className="text-sm text-gray-400 hover:text-white transition">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link key={project.href} href={project.href}>
              <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
