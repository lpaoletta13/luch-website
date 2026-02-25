import Link from "next/link";

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-5xl mx-auto mb-16">
  <h1 className="text-4xl font-semibold mb-4">
    Selected Projects
  </h1>
  <p className="text-gray-400">
  Focused work in equity research, valuation, and financial modeling.
  </p>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

      <Link href="/projects/dcf">
  <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 transition transform hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10">
    
    <h2 className="text-2xl font-semibold mb-1">
      DCF Valuation Project
    </h2>

    <p className="text-gray-400 leading-relaxed">
      Detailed discounted cash flow model with assumption analysis and sensitivity breakdown.
    </p>

  </div>
</Link>

        <Link href="/projects/stock-pitch">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 transition transform hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10">
            <h2 className="text-2xl font-semibold mb-1">
              Stock Pitch
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Investment thesis, risk analysis, and valuation framework for a selected public company.
            </p>
          </div>
        </Link>

      </div>
    </main>
  );
}