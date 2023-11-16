import Container from '@/components/atoms/Container'
import Calculator from '@/components/organisms/Calculator'

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
        <Calculator />
      </section>
    </>
  )
}
