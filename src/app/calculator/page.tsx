import Link from 'next/link'
import Container from '@/components/atoms/Container'

export default function Home() {
  return (
    <>
      <section className="py-20 text-center">
        <Container>
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-5xl">
            Calculate your meal
          </h1>
        </Container>
      </section>
      <section>
        <Container>
          <div className="flex -mx-2 mb-2">
            <div className="flex-1 mx-2">Food</div>
            <div className="flex-none w-24 mx-2">Serving</div>
            <div className="flex-none w-24 mx-2">Carbs</div>
            <div className="flex-none w-24 mx-2">Fiber</div>
            <div className="flex-none w-24 mx-2">GI</div>
            <div className="flex-none w-12 mx-2"></div>
          </div>
          <ul>
            <li className="flex -mx-2">
              <div className="flex-1 mx-2">
                <input
                  className="shadow appearance-none border rounded w-full h-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  value=""
                  defaultValue=""
                />
              </div>
              <div className="flex-none w-24 mx-2">
                <input
                  className="shadow appearance-none border rounded w-full h-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  value=""
                  defaultValue=""
                />
              </div>
              <div className="flex-none w-24 mx-2">
                <input
                  className="shadow appearance-none border rounded w-full h-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  value=""
                  defaultValue=""
                />
              </div>
              <div className="flex-none w-24 mx-2">
                <input
                  className="shadow appearance-none border rounded w-full h-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  value=""
                  defaultValue=""
                />
              </div>
              <div className="flex-none w-24 mx-2">
                <input
                  className="shadow appearance-none border rounded w-full h-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  value=""
                  defaultValue=""
                />
              </div>
              <div className="flex-none w-12 mx-2">
                <button
                  className="shadow appearance-none border rounded w-full h-10 text-lg font-semibold bg-green-600 text-white focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  +
                </button>
              </div>
            </li>
          </ul>
        </Container>
      </section>
    </>
  )
}
