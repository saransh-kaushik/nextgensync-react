export default function PersonalizationSection() {
  return (
    <section id="features" className="py-20 px-6 bg-[var(--surface-container-low)] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--secondary-fixed)]/5 rounded-full blur-3xl"></div>
          <div className="relative space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[var(--outline-variant)]/30 max-w-sm ml-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-[var(--secondary)] animate-ping"></div>
                <span className="text-[14px] leading-[1.5] font-semibold">Analyzing Learning Style...</span>
              </div>
              <div className="space-y-3">
                <div className="h-2 w-full bg-[var(--surface-container)] rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--secondary)] w-3/4"></div>
                </div>
                <p className="text-[14px] leading-[1.5] text-[var(--outline)] italic">
                  {'"Student prefers visual explanations for geometry."'}
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-[var(--outline-variant)]/30 max-w-sm relative z-10">
              <p className="font-[family-name:var(--font-manrope)] text-[18px] font-semibold mb-4">
                Next Goal: Triangles
              </p>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 bg-[var(--secondary-container)] text-[var(--on-secondary-container)] rounded text-[10px] font-bold">
                  PREDICTIVE PATH
                </span>
              </div>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded bg-[var(--surface-container)]"></div>
                <div className="w-8 h-8 rounded bg-[var(--surface-container)]"></div>
                <div className="w-8 h-8 rounded bg-[var(--secondary-fixed)]/50 border-2 border-dashed border-[var(--secondary)]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-8">
          <h2 className="font-[family-name:var(--font-manrope)] text-[36px] leading-[1.2] font-bold text-[var(--primary)]">
            AI that Learns the Learner
          </h2>
          <p className="font-[family-name:var(--font-lexend)] text-[18px] leading-[1.6] text-[var(--on-surface-variant)]">
            No two students learn the same way. Our adaptive engine analyzes response patterns, reading speeds, and conceptual gaps to create a unique curriculum path for every child.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[var(--secondary)]">trending_up</span>
              </div>
              <div>
                <h4 className="font-[family-name:var(--font-lexend)] text-[16px] leading-[1.6] font-bold mb-1">
                  Dynamic Difficulty Scaling
                </h4>
                <p className="text-[14px] leading-[1.5] text-[var(--on-surface-variant)]">
                  Questions evolve in real-time based on student accuracy to keep them in the &quot;Optimal Learning Zone&quot;.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[var(--secondary)]">psychology</span>
              </div>
              <div>
                <h4 className="font-[family-name:var(--font-lexend)] text-[16px] leading-[1.6] font-bold mb-1">
                  Cognitive Mapping
                </h4>
                <p className="text-[14px] leading-[1.5] text-[var(--on-surface-variant)]">
                  The system identifies exactly which sub-concepts are causing friction, not just which chapters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
