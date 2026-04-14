"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

export default function DCF() {
  const [zoom, setZoom] = useState(1);

  const zoomOut = () => setZoom((z) => Math.max(0.5, parseFloat((z - 0.1).toFixed(1))));
  const zoomIn  = () => setZoom((z) => Math.min(1.0, parseFloat((z + 0.1).toFixed(1))));
  const reset   = () => setZoom(1);

  return (
    <main className="min-h-screen bg-[#0a0f1c] text-white">

      {/* Header */}
      <section className="px-8 pt-24 pb-10 max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-medium mb-4">Projects</p>
          <h1 className="text-4xl md:text-5xl font-semibold mb-5 tracking-tight">DCF Valuation</h1>
          <p className="text-gray-400 leading-relaxed max-w-xl">
            Discounted cash flow model with WACC calculation, terminal value estimation, and scenario / sensitivity analysis.
          </p>
        </FadeIn>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      {/* Mobile notice */}
      <div className="md:hidden px-8 py-4 max-w-6xl mx-auto">
        <p className="text-sm text-yellow-400/80 bg-yellow-400/5 border border-yellow-400/20 rounded-xl px-4 py-3">
          This model is best viewed on a desktop browser.
        </p>
      </div>

      {/* Embed */}
      <section className="px-8 py-12 max-w-6xl mx-auto">
        <FadeIn delay={100}>

          {/* Zoom controls */}
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={zoomOut}
              disabled={zoom <= 0.5}
              className="px-3 py-1.5 rounded-lg border border-gray-700 bg-gray-800/60 text-gray-300 text-sm hover:bg-gray-700 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              − Zoom Out
            </button>
            <button
              onClick={zoomIn}
              disabled={zoom >= 1.0}
              className="px-3 py-1.5 rounded-lg border border-gray-700 bg-gray-800/60 text-gray-300 text-sm hover:bg-gray-700 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              + Zoom In
            </button>
            <span className="text-xs text-gray-500 tabular-nums">{Math.round(zoom * 100)}%</span>
            {zoom !== 1 && (
              <button
                onClick={reset}
                className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
              >
                Reset
              </button>
            )}
          </div>

          <div className="rounded-2xl border border-gray-800 overflow-hidden bg-gray-900/40" style={{ height: "580px" }}>
            <iframe
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vREtdsCyP_GnPHmH7zHW1QAQg_HjZQ-SkltKNWgqTbsSiKdqH31orTl5SOLbpcwfdZXctwlBYaQ0Pxm/pubhtml?widget=true&headers=false"
              style={{ width: `${100 / zoom}%`, height: `${580 / zoom}px`, border: "none", transform: `scale(${zoom})`, transformOrigin: "top left" }}
              title="DCF Valuation Model"
            />
          </div>

        </FadeIn>
      </section>

    </main>
  );
}
