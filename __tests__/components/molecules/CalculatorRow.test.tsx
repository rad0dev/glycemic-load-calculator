import { render, screen, fireEvent } from '@testing-library/react'
import CalculatorRow from '@/components/molecules/CalculatorRow'
import { CalculatorContext } from '@/store/calculatorContext'

describe('CalculatorRow', () => {
  it('renders the component', () => {
    render(<CalculatorRow id="calculator-row" />)
    const calculatorRowElement = screen.getByTestId('calculator-row')
    expect(calculatorRowElement).toBeInTheDocument()
  })

  it('calls removeProduct when the remove button is clicked', () => {
    const removeProduct = jest.fn()
    const id = 'calculator-row'
    render(
      <CalculatorContext.Provider value={{ removeProduct }}>
        <CalculatorRow id={id} index={1} />
      </CalculatorContext.Provider>,
    )

    const removeButton = screen.getByText('-')
    fireEvent.click(removeButton)

    expect(removeProduct).toHaveBeenCalledWith(id)
  })
})
