import { FC } from 'react'
import Product from '@/models/product'

interface InputProps {
  id: string
  type?: 'text' | 'number'
  productKey?: keyof Product
  value?: string | number
  onChangeHandler?: (key: keyof Product, value: string) => void
}

const Input: FC<InputProps> = ({
  id,
  type = 'text',
  productKey = 'name',
  value = '',
  onChangeHandler = (key: keyof Product, value: string) => {},
}) => (
  <input
    className="bg-slate-100 appearance-none rounded-full w-full h-10 px-3 text-purple-950 leading-tight focus:outline-none focus:shadow-outline"
    id={id}
    type={type}
    data-testid={id}
    value={value}
    onChange={(event) => onChangeHandler(productKey, event.target.value)}
  />
)

export default Input
