'use client'

import { FC } from 'react'
import CalculatorContextProvider from '@/store/calculatorContext'
import Container from '@/components/atoms/Container'
import CalculatorLabels from '@/components/molecules/CalculatorLabels'
import CalculatorRows from '@/components/molecules/CalculatorRows'
import CalculatorButtons from '@/components/molecules/CalculatorButtons'
import CalculatorResult from '@/components/molecules/CalculatorResult'

const Calculator: FC = () => {
  return (
    <CalculatorContextProvider>
      <div className="py-12">
        <Container>
          <CalculatorLabels />
          <CalculatorRows />
          <CalculatorButtons />
        </Container>
      </div>
      <div className="py-32 bg-slate-100 shadow-inner">
        <Container>
          <CalculatorResult />
        </Container>
      </div>
    </CalculatorContextProvider>
  )
}

export default Calculator
