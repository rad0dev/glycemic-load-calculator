import { FC, useContext } from 'react'
import { CalculatorContext } from '@/store/calculatorContext'
import CalculatorRow from '@/components/molecules/CalculatorRow'

const CalculatorRows: FC = () => {
  const { products } = useContext(CalculatorContext)

  return (
    <ul>
      {products.map(({ id }) => {
        return <CalculatorRow id={id} key={id} />
      })}
    </ul>
  )
}

export default CalculatorRows
