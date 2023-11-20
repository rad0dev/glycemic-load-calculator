import React from 'react'
import { render, screen } from '@testing-library/react'
import { CalculatorContext } from '@/store/calculatorContext'
import CalculatorRows from '@/components/molecules/CalculatorRows'

describe('CalculatorRows', () => {
  it('renders a list of CalculatorRow components', () => {
    const products = [{ id: 1 }, { id: 2 }, { id: 3 }]

    const { getAllByTestId } = render(
      <CalculatorContext.Provider value={{ products }}>
        <CalculatorRows />
      </CalculatorContext.Provider>,
    )

    for (let product of products) {
      let calculatorRowElement = screen.getByTestId(product.id)
      expect(calculatorRowElement).toBeInTheDocument()
    }
  })
})
