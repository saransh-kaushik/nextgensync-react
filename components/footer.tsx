import Link from "next/link"

export default function Footer() {
  return (
    <footer id="about" className="bg-slate-50 w-full py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 font-[family-name:var(--font-manrope)] text-sm">
        <div className="space-y-4">
          <div className="text-lg font-bold text-slate-900">NextGenSync</div>
          <p className="text-slate-500 max-w-sm">
            © 2026 NextGenSync EdTech.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end items-center">
          <Link
            href="#"
            className="text-slate-500 hover:text-emerald-600 transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-slate-500 hover:text-emerald-600 transition-colors duration-200"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-slate-500 hover:text-emerald-600 transition-colors duration-200"
          >
            Contact Support
          </Link>
          <Link
            href="#"
            className="text-slate-500 hover:text-emerald-600 transition-colors duration-200"
          >
            LinkedIn
          </Link>
          <Link
            href="#"
            className="text-slate-500 hover:text-emerald-600 transition-colors duration-200"
          >
            Twitter
          </Link>
        </div>
      </div>
    </footer>
  )
}
