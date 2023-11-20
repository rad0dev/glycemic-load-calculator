'use client'

import { FC } from 'react'
import CalculatorContextProvider from '@/store/calculatorContext'
import Container from '@/components/atoms/Container'
import CalculatorRows from '@/components/molecules/CalculatorRows'
import CalculatorButtons from '@/components/molecules/CalculatorButtons'
import CalculatorResult from '@/components/molecules/CalculatorResult'

const Calculator: FC = () => {
  return (
    <CalculatorContextProvider>
      <Container>
        <div className="flex -mx-2 mb-2">
          <div className="flex-1 mx-2">Food</div>
          <div className="flex-none w-24 mx-2">Serving</div>
          <div className="flex-none w-24 mx-2">Carbs</div>
          <div className="flex-none w-24 mx-2">Fiber</div>
          <div className="flex-none w-24 mx-2">GI</div>
          <div className="flex-none w-12 mx-2"></div>
        </div>
        <CalculatorRows />
        <CalculatorButtons />
        <CalculatorResult />
      </Container>
    </CalculatorContextProvider>
  )
}

export default Calculator
