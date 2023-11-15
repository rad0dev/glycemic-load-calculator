import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <div className="flex gap-x-6">
              <Link
                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                href="/"
              >
                Home
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <Link
              className="inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
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
