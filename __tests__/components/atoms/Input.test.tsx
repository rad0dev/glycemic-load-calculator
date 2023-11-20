import { render, screen } from '@testing-library/react'
import Input from '@/components/atoms/Input'

describe('Input', () => {
  it('renders input element with default type', () => {
    const id = 'test-input'
    render(<Input id={id} />)
    const inputElement = screen.getByTestId(id)
    expect(inputElement).toBeInTheDocument()
    expect(inputElement.tagName).toBe('INPUT')
    expect(inputElement.getAttribute('type')).toBe('text')
  })

  it('renders input element with specified type', () => {
    const id = 'test-input'
    render(<Input id={id} type="number" />)
    const inputElement = screen.getByTestId(id)
    expect(inputElement).toBeInTheDocument()
    expect(inputElement.tagName).toBe('INPUT')
    expect(inputElement.getAttribute('type')).toBe('number')
  })
})
