import Image from "next/image"

export default function HeroSection() {
  return (
    <header className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="font-[family-name:var(--font-manrope)] text-[48px] leading-[1.2] tracking-[-0.02em] font-extrabold text-[var(--primary)]">
            Syncing Generations for a Future-Ready Education
          </h1>
          <p className="font-[family-name:var(--font-lexend)] text-[18px] leading-[1.6] text-[var(--on-surface-variant)] max-w-xl">
            The first unified AI platform designed specifically for Indian classrooms. Bridge the gap between traditional excellence and technological foresight with guarded AI tools for administrators, teachers, and students.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-[var(--secondary)]/10 rounded-full blur-3xl"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] transition-all duration-500">
            <Image
              alt="Classroom students using technology"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaP5ELkXlPsUCsqQ5xCXj0h0ZOJKaTDPdG4Xhe5u7iqwMaHbNVRenDKCZH59XAgSCMaJ15qZch-VlsGlYafsrxX8j_WQU-CcUSXAgmWTHYO0smj1NAQtyw56-0gNBEg3CEp8Xx3BwnVqTzNH1yhSsrDpcoWxUm-yEZOF8PbDik1Ba6AK8Ko9X7pASRQuf5TOtNF4IJYkFcpMiBxMGdoMRQMoyEoANztDPaO54NoZ_bC0el_SZ_0-DqWOTcJ8Z5GWg_GmyR8DGkuS_3"
              width={800}
              height={600}
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/70 backdrop-blur-[12px] border border-white/40 p-6 rounded-xl shadow-[0_10px_30px_-10px_rgba(0,108,73,0.1)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[var(--secondary)] rounded-lg text-white">
                  <span className="material-symbols-outlined">auto_awesome</span>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-inter)] text-[12px] leading-none tracking-[0.05em] font-semibold text-[var(--secondary)] mb-1">
                    AI INSIGHT
                  </p>
                  <p className="font-[family-name:var(--font-lexend)] text-[16px] leading-[1.6] text-[var(--on-surface)] font-semibold italic">
                    {'"Class 10B performance in Mathematics improved by 22% using personalized learning paths."'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
