export default function SafetySection() {
  return (
    <section id="safety" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[var(--on-primary-fixed)] text-white rounded-[48px] overflow-hidden relative">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle at 20% 30%, #6ffbbe 0%, transparent 40%)",
            }}
          ></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 p-12 md:p-20 relative z-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <span className="material-symbols-outlined text-[var(--secondary-fixed)] text-[18px]">
                  security
                </span>
                <span className="font-[family-name:var(--font-inter)] text-[12px] leading-none tracking-[0.05em] font-semibold text-[var(--secondary-fixed)]">
                  GUARDIAN PROTOCOL
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-manrope)] text-[36px] leading-[1.2] font-bold leading-tight">
                Guarded AI: Safety First, Technology Second
              </h2>
              <p className="font-[family-name:var(--font-lexend)] text-[18px] leading-[1.6] opacity-80">
                We understand the responsibility of school education. Our &quot;Guarded AI&quot; environment features strict content filters and 24/7 monitoring tools.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[var(--secondary-fixed)]">
                      monitoring
                    </span>
                  </div>
                  <h4 className="font-[family-name:var(--font-manrope)] text-[20px] font-semibold">
                    Teacher Watchtower
                  </h4>
                  <p className="text-[14px] leading-[1.5] opacity-70">
                    Teachers get real-time alerts if a student&apos;s interaction shows signs of struggle or inappropriate usage.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[var(--secondary-fixed)]">
                      family_restroom
                    </span>
                  </div>
                  <h4 className="font-[family-name:var(--font-manrope)] text-[20px] font-semibold">
                    Parental Portal
                  </h4>
                  <p className="text-[14px] leading-[1.5] opacity-70">
                    Detailed weekly summaries for parents focusing on learning progress and digital well-being.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="w-full max-w-md aspect-square rounded-full border border-white/20 flex items-center justify-center relative">
                <div className="w-4/5 h-4/5 rounded-full border border-white/10 flex items-center justify-center relative">
                  <div className="w-3/5 h-3/5 rounded-full bg-[var(--secondary-fixed)]/20 animate-pulse flex items-center justify-center">
                    <span
                      className="material-symbols-outlined text-[var(--secondary-fixed)] text-[64px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      shield
                    </span>
                  </div>
                </div>
                {/* Floating icons representing monitoring */}
                <div className="absolute top-0 right-10 p-4 bg-white/10 rounded-2xl backdrop-blur-md">
                  <span className="material-symbols-outlined text-[var(--secondary-fixed)]">lock</span>
                </div>
                <div className="absolute bottom-20 left-0 p-4 bg-white/10 rounded-2xl backdrop-blur-md">
                  <span className="material-symbols-outlined text-[var(--secondary-fixed)]">
                    visibility
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
