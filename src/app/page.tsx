import Link from 'next/link'
import Container from '@/components/atoms/Container'

export default function Home() {
  return (
    <>
      <section className="pb-16 pt-20 lg:pt-32 text-center">
        <Container>
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-5xl">
            Glycemic Load Calculator <br /> Discover the Power of Smart Eating!
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
            The Glycemic Load (GL) is a crucial metric for understanding how
            different foods impact your blood sugar levels. It takes into
            account not only the glycemic index (GI) of a food but also the
            portion size. Our Glycemic Load Calculator is your key to making
            informed dietary choices that can help you maintain steady energy
            levels and achieve your health and weight management goals. Take
            control of your nutrition and well-being by using our tool to
            calculate the Glycemic Load of your meals, and start your journey
            towards a healthier you today!
          </p>

          <Link
            className="group inline-flex items-center justify-center rounded-full py-2 px-4 mt-6 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
            href="/calculator"
          >
            Calculate the GL of meal
          </Link>
        </Container>
      </section>
    </>
  )
}
