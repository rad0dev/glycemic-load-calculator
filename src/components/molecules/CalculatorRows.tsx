import { FC, useContext } from 'react'
import { CalculatorContext } from '@/store/calculatorContext'
import CalculatorRow from '@/components/molecules/CalculatorRow'

const CalculatorRows: FC = () => {
  const { products } = useContext(CalculatorContext)

  return (
    <ul>
      {products.map((product) => {
        return <CalculatorRow key={product.id} {...product} />
      })}
    </ul>
  )
}

export default CalculatorRows
