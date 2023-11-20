import { FC, useContext } from 'react'
import { CalculatorContext } from '@/store/calculatorContext'

const CalculatorButtons: FC = () => {
  const { addProduct } = useContext(CalculatorContext)

  const addProductHandler = () => {
    addProduct()
  }

  return (
    <button
      className="shadow appearance-none border rounded w-full h-10 text-lg font-semibold bg-green-600 text-white focus:outline-none focus:shadow-outline"
      type="button"
      onClick={addProductHandler}
    >
      +
    </button>
  )
}

export default CalculatorButtons
