import FadeIn from "@/components/FadeIn";

export default function StockPitch() {
  return (
    <main className="min-h-screen bg-[#0a0f1c] text-white">

      {/* Header */}
      <section className="px-8 pt-24 pb-10 max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-medium mb-4">Projects</p>
          <h1 className="text-4xl md:text-5xl font-semibold mb-5 tracking-tight">Stock Pitch — MDLZ</h1>
          <p className="text-gray-400 leading-relaxed max-w-xl">
            Buyside-style investment thesis covering Mondelez International: business model, competitive moat, valuation, and price target.
          </p>
        </FadeIn>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      <section className="px-8 py-12 max-w-5xl mx-auto space-y-8">

        {/* Download card */}
        <FadeIn delay={100}>
          <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 p-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-transparent pointer-events-none" />
            <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <h2 className="text-lg font-semibold mb-1">MDLZ Stock Pitch</h2>
                <p className="text-gray-400 text-sm">PDF — Mondelez International</p>
              </div>
              <a
                href="/MDLZ_Stock_Pitch_Final.pdf"
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

        {/* PDF embed */}
        <FadeIn delay={200}>
          <div className="rounded-2xl border border-gray-800 overflow-hidden bg-gray-900/40">
            <iframe
              src="/MDLZ_Stock_Pitch_Final.pdf"
              className="w-full"
              style={{ height: "860px", border: "none" }}
              title="MDLZ Stock Pitch"
            />
          </div>
        </FadeIn>

      </section>

    </main>
  );
}
