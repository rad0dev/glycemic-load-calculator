import { FC } from 'react'
import Product from '@/models/product'

interface InputProps {
  id: string
  type?: 'text' | 'number'
  productKey?: keyof Product
  value?: string | number
  onChangeHandler?: (key: keyof Product, value: string | number) => void
}

const Input: FC<InputProps> = ({
  id,
  type = 'text',
  productKey = 'name',
  value = '',
  onChangeHandler = (key: keyof Product, value: string | number) => {},
}) => (
  <input
    className="shadow appearance-none border rounded w-full h-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id={id}
    type={type}
    data-testid={id}
    value={value}
    onChange={(event) => onChangeHandler(productKey, event.target.value)}
  />
)

export default Input
