import { render, screen } from '@testing-library/react'
import Calculator from '@/components/organisms/Calculator'

describe('Calculator', () => {
  it('renders the food label', () => {
    render(<Calculator />)
    const foodLabel = screen.getByText('Food')
    expect(foodLabel).toBeInTheDocument()
  })

  it('renders the serving label', () => {
    render(<Calculator />)
    const servingLabel = screen.getByText('Serving')
    expect(servingLabel).toBeInTheDocument()
  })

  it('renders the carbs label', () => {
    render(<Calculator />)
    const carbsLabel = screen.getByText('Carbs')
    expect(carbsLabel).toBeInTheDocument()
  })

  it('renders the fiber label', () => {
    render(<Calculator />)
    const fiberLabel = screen.getByText('Fiber')
    expect(fiberLabel).toBeInTheDocument()
  })

  it('renders the GI label', () => {
    render(<Calculator />)
    const giLabel = screen.getByText('GI')
    expect(giLabel).toBeInTheDocument()
  })
})
