import { render } from '@testing-library/react'
import Container from '@/components/atoms/Container'

describe('Container', () => {
  it('renders the component', () => {
    render(<Container />)
  })

  it('renders children correctly', () => {
    const { getByText } = render(
      <Container>
        <div>Test Content</div>
      </Container>,
    )

    expect(getByText('Test Content')).toBeInTheDocument()
  })
})
