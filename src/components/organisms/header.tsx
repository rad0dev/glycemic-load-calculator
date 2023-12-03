import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <div className="flex gap-x-6">
              <Link
                className="inline-flex items-center rounded-full px-4 h-10 text-lg font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                href="/"
              >
                Home
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <Link
              className="inline-flex items-center justify-center rounded-full h-10 px-4 text-white text-lg font-semibold outline-0 bg-gradient-to-br from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400"
              href="/calculator"
            >
              Start Calculation
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
