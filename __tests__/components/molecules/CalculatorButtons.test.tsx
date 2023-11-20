import { render, fireEvent } from '@testing-library/react'
import CalculatorButtons from '@/components/molecules/CalculatorButtons'
import { CalculatorContext } from '@/store/calculatorContext'

describe('CalculatorButtons', () => {
  it('should call addProduct when the button is clicked', () => {
    const addProduct = jest.fn()

    const { getByText } = render(
      <CalculatorContext.Provider value={{ addProduct }}>
        <CalculatorButtons />
      </CalculatorContext.Provider>,
    )

    fireEvent.click(getByText('+'))

    expect(addProduct).toHaveBeenCalledTimes(1)
  })
})
