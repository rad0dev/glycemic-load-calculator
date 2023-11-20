import { FC } from 'react'

interface InputProps {
  id: string
  type?: 'text' | 'number'
}

const Input: FC<InputProps> = ({ id, type = 'text' }) => (
  <input
    className="shadow appearance-none border rounded w-full h-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id={id}
    type={type}
    data-testid={id}
  />
)

export default Input
