import Link from 'next/link'
import Container from '@/components/atoms/Container'
import Header from '@/components/atoms/Header'

export default function Home() {
  return (
    <>
      <section className="pb-16 pt-20 lg:pt-32 text-center">
        <Container>
          <Header level="h1">
            Glycemic Load Calculator <br /> Discover the Power of Smart Eating!
          </Header>
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
            className="inline-flex items-center justify-center rounded-full h-10 px-4 mt-6 text-lg font-semibold outline-0 bg-gradient-to-br from-cyan-400 to-cyan-500 text-white hover:from-cyan-300 hover:to-cyan-400"
            href="/calculator"
          >
            Calculate the GL of meal
          </Link>
        </Container>
      </section>
    </>
  )
}
