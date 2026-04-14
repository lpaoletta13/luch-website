import FadeIn from "@/components/FadeIn";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#0a0f1c] text-white">

      {/* Header */}
      <section className="px-8 pt-24 pb-16 max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-medium mb-4">Resume</p>
          <h1 className="text-4xl md:text-5xl font-semibold mb-5 tracking-tight">Background</h1>
          <p className="text-gray-400 leading-relaxed max-w-md">
            Finance major with a focus on equity research, valuation, and financial modeling.
          </p>
        </FadeIn>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      <section className="px-8 py-16 max-w-3xl mx-auto space-y-10">

        {/* Download card */}
        <FadeIn>
          <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 p-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-transparent pointer-events-none" />
            <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <h2 className="text-lg font-semibold mb-1">Full Resume</h2>
                <p className="text-gray-400 text-sm">PDF — updated 2026</p>
              </div>
              <a
                href="/Luciano_Paoletta_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200 text-sm whitespace-nowrap"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Open PDF
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Education */}
        <FadeIn delay={100}>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium mb-6">Education</p>
            <div className="border border-gray-800 rounded-2xl bg-gray-900/30 divide-y divide-gray-800">
              <div className="p-6">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                  <h3 className="font-semibold text-white">Finance — B.S.</h3>
                  <span className="text-sm text-gray-500">Expected May 2026</span>
                </div>
                <p className="text-gray-400 text-sm">Bentley University</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Skills */}
        <FadeIn delay={150}>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium mb-6">Skills &amp; Tools</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Financial Modeling", items: ["DCF", "LBO", "Comps", "Sensitivity Analysis"] },
                { label: "Equity Research", items: ["Investment Thesis", "Industry Analysis", "Valuation"] },
                { label: "Technical", items: ["Excel", "Python", "Bloomberg"] },
                { label: "Soft Skills", items: ["Research", "Communication", "Analytical Thinking"] },
              ].map((group) => (
                <div key={group.label} className="border border-gray-800 rounded-xl bg-gray-900/30 p-5">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">{group.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="text-xs px-2.5 py-1 rounded-full border border-gray-700 text-gray-300 bg-gray-800/50">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </section>
    </main>
  );
}
