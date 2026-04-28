"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md font-[family-name:var(--font-manrope)] antialiased fixed top-0 left-0 w-full z-50 border-b border-slate-200/50 shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <div className="text-xl font-extrabold tracking-tight text-slate-900">
          NextGenSync
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#services"
            className="text-emerald-600 font-semibold border-b-2 border-emerald-600 pb-1 transition-transform active:scale-95"
          >
            Services
          </Link>
          <Link
            href="#safety"
            className="text-slate-600 font-medium hover:text-slate-900 transition-all duration-300 active:scale-95"
          >
            Safety
          </Link>
          <Link
            href="#features"
            className="text-slate-600 font-medium hover:text-slate-900 transition-all duration-300 active:scale-95"
          >
            Features
          </Link>
          <Link
            href="#about"
            className="text-slate-600 font-medium hover:text-slate-900 transition-all duration-300 active:scale-95"
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  )
}
