import { render } from '@testing-library/react'
import Header from '@/components/atoms/Header'

describe('Header', () => {
  it('renders the correct level heading', () => {
    const { getByText } = render(<Header level="h1">Hello World</Header>)
    const headingElement = getByText('Hello World')
    expect(headingElement.tagName).toBe('H1')
  })

  it('renders the children correctly', () => {
    const { getByText } = render(<Header level="h2">Hello World</Header>)
    const headingElement = getByText('Hello World')
    expect(headingElement).toBeInTheDocument()
  })

  it('renders with the default level if not provided', () => {
    const { getByText } = render(<Header>Hello World</Header>)
    const headingElement = getByText('Hello World')
    expect(headingElement.tagName).toBe('H1')
  })
})
