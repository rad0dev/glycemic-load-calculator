import Container from '@/components/atoms/Container'
import Calculator from '@/components/organisms/Calculator'
import Header from '@/components/atoms/Header'

export default function Home() {
  return (
    <>
      <section className="py-20 text-center">
        <Container>
          <Header level="h1">Glycemic Load Calculator</Header>
        </Container>
      </section>
      <section>
        <Calculator />
      </section>
    </>
  )
}
