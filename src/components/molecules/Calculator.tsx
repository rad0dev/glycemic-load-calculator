'use client'

import { useState } from 'react'
import { FC } from 'react'
import Container from '@/components/atoms/Container'
import Input from '@/components/atoms/Input'

const Calculator: FC = () => {
  const [additionalRows, setAdditionalRows] = useState<number>(0)
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
        <li className="flex -mx-2 mb-4">
          <div className="flex-1 mx-2">
            <Input id="food" />
          </div>
          <div className="flex-none w-24 mx-2">
            <Input id="serving" type="number" />
          </div>
          <div className="flex-none w-24 mx-2">
            <Input id="carbs" type="number" />
          </div>
          <div className="flex-none w-24 mx-2">
            <Input id="fiber" type="number" />
          </div>
          <div className="flex-none w-24 mx-2">
            <Input id="gi" type="number" />
          </div>
          <div className="flex-none w-12 mx-2">
            {additionalRows < 1 && (
              <button
                className="shadow appearance-none border rounded w-full h-10 text-lg font-semibold bg-green-600 text-white focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => setAdditionalRows(additionalRows + 1)}
              >
                +
              </button>
            )}
          </div>
        </li>
        {Array.from({ length: additionalRows }).map((_, index) => {
          const row = index + 1
          return (
            <li className="flex -mx-2 mb-4" key={`row${row}`}>
              <div className="flex-1 mx-2">
                <Input id="food" />
              </div>
              <div className="flex-none w-24 mx-2">
                <Input id="serving" type="number" />
              </div>
              <div className="flex-none w-24 mx-2">
                <Input id="carbs" type="number" />
              </div>
              <div className="flex-none w-24 mx-2">
                <Input id="fiber" type="number" />
              </div>
              <div className="flex-none w-24 mx-2">
                <Input id="gi" type="number" />
              </div>
              <div className="flex-none w-12 mx-2">
                {row === additionalRows && (
                  <button
                    className="shadow appearance-none border rounded w-full h-10 text-lg font-semibold bg-green-600 text-white focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={() => setAdditionalRows(additionalRows + 1)}
                  >
                    +
                  </button>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default Calculator
