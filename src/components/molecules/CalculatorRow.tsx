'use client'

import { FC, useContext } from 'react'
import { CalculatorContext } from '@/store/calculatorContext'
import Input from '@/components/atoms/Input'

const CalculatorRow: FC<{ id: string }> = ({ id }) => {
  const { removeProduct } = useContext(CalculatorContext)

  const removeProductHandler = () => {
    removeProduct(id)
  }

  return (
    <li className="flex -mx-2 mb-4" data-testid={id}>
      <div className="flex-1 mx-2">
        <Input id={`food#${id}`} />
      </div>
      <div className="flex-none w-24 mx-2">
        <Input id={`serving#${id}`} type="number" />
      </div>
      <div className="flex-none w-24 mx-2">
        <Input id={`carbs#${id}`} type="number" />
      </div>
      <div className="flex-none w-24 mx-2">
        <Input id={`fiber#${id}`} type="number" />
      </div>
      <div className="flex-none w-24 mx-2">
        <Input id={`gi#${id}`} type="number" />
      </div>
      <div className="flex-none w-12 mx-2">
        <button
          className="shadow appearance-none border rounded w-full h-10 text-lg font-semibold bg-red-600 text-white focus:outline-none focus:shadow-outline"
          type="button"
          onClick={removeProductHandler}
        >
          -
        </button>
      </div>
    </li>
  )
}

export default CalculatorRow
