'use client'

import { FC, useContext } from 'react'
import { CalculatorContext } from '@/store/calculatorContext'
import Input from '@/components/atoms/Input'
import Product from '@/models/product'

const CalculatorRow: FC<Product> = ({
  id,
  name,
  serving,
  carbs,
  fiber,
  gi,
}) => {
  const { removeProduct, updateProduct } = useContext(CalculatorContext)

  const removeProductHandler = () => {
    removeProduct(id)
  }

  const inputOnChangeHandler = (key: keyof Product, value: string | number) => {
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
          value={carbs}
          productKey="carbs"
          onChangeHandler={inputOnChangeHandler}
        />
      </div>
      <div className="flex-none w-24 mx-2">
        <Input
          id={`fiber#${id}`}
          type="number"
          value={fiber}
          productKey="fiber"
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
