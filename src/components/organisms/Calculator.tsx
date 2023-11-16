'use client'

import { useState } from 'react'
import { FC } from 'react'
import Container from '@/components/atoms/Container'
import CalculatorRow from '@/components/molecules/CalculatorRow'
import Food from '@/models/food'

const Calculator: FC = () => {
  const [foodItems, setFoodItems] = useState<Food[]>([])

  // foodName, foodServing, foodCarbs, foodFiber, foodGi
  const addFoodItem = () => {
    const newFoodItem = new Food()

    setFoodItems((prevFoodItems) => {
      return prevFoodItems.concat(newFoodItem)
    })
  }

  return (
    <Container>
      <div className="flex -mx-2 mb-2">
        <div className="flex-1 mx-2">Food</div>
        <div className="flex-none w-24 mx-2">Serving</div>
        <div className="flex-none w-24 mx-2">Carbs</div>
        <div className="flex-none w-24 mx-2">Fiber</div>
        <div className="flex-none w-24 mx-2">GI</div>
        <div className="flex-none w-12 mx-2"></div>
      </div>
      <ul>
        {foodItems.map(({ id }) => {
          return <CalculatorRow id={id} key={id} />
        })}
      </ul>
      <button
        className="shadow appearance-none border rounded w-full h-10 text-lg font-semibold bg-green-600 text-white focus:outline-none focus:shadow-outline"
        type="button"
        onClick={addFoodItem}
      >
        +
      </button>
    </Container>
  )
}

export default Calculator
