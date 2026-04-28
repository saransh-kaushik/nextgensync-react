import Image from "next/image"

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-[family-name:var(--font-manrope)] text-[36px] leading-[1.2] font-bold text-[var(--primary)]">
            Integrated Ecosystem
          </h2>
          <p className="font-[family-name:var(--font-lexend)] text-[16px] leading-[1.6] text-[var(--on-surface-variant)] max-w-2xl mx-auto">
            One platform to handle every educational touchpoint, powered by specialized AI engines.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* AI Chat Apps */}
          <div className="md:col-span-2 bg-white p-12 rounded-3xl shadow-sm border border-[var(--outline-variant)]/30 flex flex-col justify-between group hover:border-[var(--secondary)] transition-colors">
            <div>
              <div className="w-14 h-14 bg-[var(--secondary-container)] text-[var(--on-secondary-container)] rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[32px]">chat_bubble</span>
              </div>
              <h3 className="font-[family-name:var(--font-manrope)] text-[24px] leading-[1.3] font-semibold mb-4">
                Curriculum-Synced AI Tutors
              </h3>
              <p className="font-[family-name:var(--font-lexend)] text-[16px] leading-[1.6] text-[var(--on-surface-variant)] mb-8 max-w-md">
                Our AI chatbots are trained exclusively on your school&apos;s textbooks and teacher notes, ensuring 100% curriculum alignment and safe interactions.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-auto">
              <div className="flex -space-x-3">
                <Image
                  alt="Student avatar"
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPV6je_hH2Mjkfj4cC6JuYSIOKP_503_7J-SGFY7-iC3nbPMxQU0etQCOhlQig5_six1sH9Xs2WZuomgDnk9jlGK6zUtdMkfWfDhDgHzAm60ImR9wgPhJUaKL-7gIaLZ99w6ofBWb4YJ9z-5dNv9s_zstESAX0bCnGdPSeQ8uUVHRPQgdohsS00fSKs1Y4uUeAkSKGJ7OYSGXiePkANnI350Ui5zMo4S08us_uLaBhVdYqNiDoYyigq9FZ5sFjcLWCD5vCIu9vaUX2"
                  width={40}
                  height={40}
                />
                <Image
                  alt="Student avatar"
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0o6CMqWJJHFhBBnYB066O81m_WpFVVw_eyfo6KCa60oDNP-qDfTj0AmvxNmEBORoEDby5MsIUdjWiiA2u2B56Dwff_eB3HapYJqVLx_0iRmEE08Xhvi8KEwGol3VhaIXa4qO6q42fjBsSsMmnZ9cPBOObc4gH9AtfC8dLbqlwjuDhTH1zGEhhc7i7BBnfUEpzNHsxMxXG_XfyziwPq9y9TnjDuHBP6qOcfZFiXRfXDbXQ0WW8a1CV_6qYpZm_6cR9b2kuTXyMWDnl"
                  width={40}
                  height={40}
                />
              </div>
              <p className="text-[14px] leading-[1.5] text-[var(--outline)] font-medium">
                Joined by 12k students today
              </p>
            </div>
          </div>

          {/* Mock Tests */}
          <div className="bg-[var(--primary-container)] p-12 rounded-3xl text-white flex flex-col">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[var(--secondary-fixed)] text-[32px]">quiz</span>
            </div>
            <h3 className="font-[family-name:var(--font-manrope)] text-[24px] leading-[1.3] font-semibold mb-4">
              Predictive Mock Exams
            </h3>
            <p className="font-[family-name:var(--font-lexend)] text-[16px] leading-[1.6] opacity-80 mb-8">
              AI-generated test papers that adapt difficulty levels based on real-time class proficiency data.
            </p>
            <div className="mt-auto pt-6 border-t border-white/10">
              <div className="flex items-center justify-between">
                <span className="font-[family-name:var(--font-inter)] text-[12px] leading-none tracking-[0.05em] font-semibold">
                  ACCURACY
                </span>
                <span className="font-[family-name:var(--font-inter)] text-[12px] leading-none tracking-[0.05em] font-semibold text-[var(--secondary-fixed)]">
                  98.4%
                </span>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded-full mt-2">
                <div className="bg-[var(--secondary-fixed)] h-full rounded-full w-[98.4%]"></div>
              </div>
            </div>
          </div>

          {/* School ERP */}
          <div className="md:col-span-3 bg-white border border-[var(--outline-variant)]/30 rounded-3xl p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-14 h-14 bg-[var(--surface-container)] text-[var(--primary)] rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[32px]">dashboard</span>
              </div>
              <h3 className="font-[family-name:var(--font-manrope)] text-[24px] leading-[1.3] font-semibold mb-4">
                The Smart ERP Backbone
              </h3>
              <p className="font-[family-name:var(--font-lexend)] text-[16px] leading-[1.6] text-[var(--on-surface-variant)] mb-6">
                Automate attendance, grade tracking, and administrative workflows with an interface designed for speed and clarity.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[14px] leading-[1.5] font-medium">
                  <span className="material-symbols-outlined text-[var(--secondary)]">check_circle</span>
                  One-Click Report Card Generation
                </li>
                <li className="flex items-center gap-3 text-[14px] leading-[1.5] font-medium">
                  <span className="material-symbols-outlined text-[var(--secondary)]">check_circle</span>
                  Automated Fee Reminders &amp; Tracking
                </li>
              </ul>
            </div>
            <div className="relative p-6 bg-[var(--surface-container)] rounded-2xl">
              <Image
                alt="Data dashboard visualization"
                className="rounded-xl shadow-lg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8rt8TtY42T66TEKvrOPerDwp3yL7anwp6tPy4A8OzjXpxAalaVv_mhO2KH_phN8Jdro0B5w3Lnc2I_H8GloZSvlRg3o-th7BCnTr7mW50yEHrp40oQ6v7D356BRHM27FnspJQ5XsrZzQ725VIaXHda9nF05km_yb-zH8HJ1ePNDAfIKBhi_qPiD19sSirRMyXTV9XRrelrKXGiX4Ac0MXjQlV0L3KifIK6623g8nGs9KOgoI0PKyHTp7xmV-2XBgS_M0USdN0NCq1"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
