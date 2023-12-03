'use client'

import { FC, useContext } from 'react'
import { CalculatorContext } from '@/store/calculatorContext'
import Input from '@/components/atoms/Input'
import Product from '@/models/product'

interface CalculatorRowProps extends Product {
  index: number
}

const CalculatorRow: FC<CalculatorRowProps> = ({
  index,
  id,
  name,
  serving,
  carbsPerServing,
  fiberPerServing,
  gi,
}) => {
  const { removeProduct, updateProduct } = useContext(CalculatorContext)

  const removeProductHandler = () => {
    removeProduct(id)
  }

  const inputOnChangeHandler = (key: keyof Product, value: string) => {
    updateProduct(id, key, value)
  }

  return (
    <li className="flex -mx-2 mb-4" data-testid={id}>
      <div className="flex-1 mx-2">
        <Input
          id={`food#${id}`}
          value={name}
          onChangeHandler={inputOnChangeHandler}
        />
      </div>
      <div className="flex-none w-24 mx-2">
        <Input
          id={`serving#${id}`}
          type="number"
          value={serving}
          productKey="serving"
          onChangeHandler={inputOnChangeHandler}
        />
      </div>
      <div className="flex-none w-24 mx-2">
        <Input
          id={`carbs#${id}`}
          type="number"
          value={carbsPerServing}
          productKey="carbsPerServing"
          onChangeHandler={inputOnChangeHandler}
        />
      </div>
      <div className="flex-none w-24 mx-2">
        <Input
          id={`fiber#${id}`}
          type="number"
          value={fiberPerServing}
          productKey="fiberPerServing"
          onChangeHandler={inputOnChangeHandler}
        />
      </div>
      <div className="flex-none w-24 mx-2">
        <Input
          id={`gi#${id}`}
          type="number"
          value={gi}
          productKey="gi"
          onChangeHandler={inputOnChangeHandler}
        />
      </div>
      <div className="flex-none w-24 mx-2">
        {index ? (
          <button
            className="appearance-none border outline-0 rounded-full w-full h-10 text-lg font-semibold bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-500 hover:to-red-600"
            type="button"
            onClick={removeProductHandler}
          >
            -
          </button>
        ) : (
          ''
        )}
      </div>
    </li>
  )
}

export default CalculatorRow
