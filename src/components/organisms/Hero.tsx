import Link from 'next/link'
import Container from '@/components/atoms/Container'

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <Container>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900">
          Calculate your meal
        </h1>
      </Container>
    </section>
  )
}
