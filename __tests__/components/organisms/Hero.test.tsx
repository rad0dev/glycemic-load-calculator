import { render } from '@testing-library/react'
import Hero from '@/components/organisms/Hero'

describe('Hero', () => {
  it('renders the correct text', () => {
    const { getByText } = render(<Hero />)
    const headingElement = getByText('Calculate your meal')
    expect(headingElement).toBeInTheDocument()
  })
})
