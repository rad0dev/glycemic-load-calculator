import { FC, useContext } from 'react'
import { CalculatorContext } from '@/store/calculatorContext'
import CalculatorRow from '@/components/molecules/CalculatorRow'

const CalculatorRows: FC = () => {
  const { products } = useContext(CalculatorContext)

  console.log(products)

  return (
    <ul>
      {products.map((product, index) => {
        return <CalculatorRow key={product.id} index={index} {...product} />
      })}
    </ul>
  )
}

export default CalculatorRows
