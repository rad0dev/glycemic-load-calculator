import { FC, useContext } from 'react'
import { CalculatorContext } from '@/store/calculatorContext'

const CalculatorButtons: FC = () => {
  const { addProduct } = useContext(CalculatorContext)

  const addProductHandler = () => {
    addProduct()
  }

  return (
    <div className="mt-12 text-center">
      <button
        className="appearance-none border outline-0 rounded-full w-80 h-10 text-lg font-semibold bg-gradient-to-br from-cyan-400 to-cyan-500 text-white hover:from-cyan-300 hover:to-cyan-400"
        type="button"
        onClick={addProductHandler}
      >
        Add Product +
      </button>
    </div>
  )
}

export default CalculatorButtons
