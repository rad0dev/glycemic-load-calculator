import { render, screen } from '@testing-library/react'
import Header from '@/components/organisms/Header'

describe('Header', () => {
  it('renders the Home link', () => {
    render(<Header />)
    const homeLink = screen.getByText('Home')
    expect(homeLink).toBeInTheDocument()
  })

  it('renders the Start Calculation link', () => {
    render(<Header />)
    const startCalculationLink = screen.getByText('Start Calculation')
    expect(startCalculationLink).toBeInTheDocument()
  })

  it('has the correct href for the Home link', () => {
    render(<Header />)
    const homeLink = screen.getByText('Home')
    expect(homeLink.getAttribute('href')).toBe('/')
  })

  it('has the correct href for the Start Calculation link', () => {
    render(<Header />)
    const startCalculationLink = screen.getByText('Start Calculation')
    expect(startCalculationLink.getAttribute('href')).toBe('/calculator')
  })
})
