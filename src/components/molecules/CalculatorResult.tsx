import { FC, useContext } from 'react'
import { CalculatorContext } from '@/store/calculatorContext'
import Product from '@/models/product'

interface CalculatedProduct extends Product {
  percentageCarbs: number
  percentageGlycemicValue: number
}

const CalculatorResult: FC = () => {
  const { products } = useContext(CalculatorContext)

  const totalCarbs: number = products.reduce(
    (acc, { carbsPerServing, serving }) => {
      if (carbsPerServing && serving) {
        return acc + (serving / 100) * carbsPerServing
      }
      return acc
    },
    0,
  )

  const totalFiber: number = products.reduce(
    (acc, { fiberPerServing, serving }) => {
      if (fiberPerServing && serving) {
        return acc + (serving / 100) * fiberPerServing
      }
      return acc
    },
    0,
  )

  const netCarbs: number = totalCarbs - totalFiber

  const calculatedProducts: CalculatedProduct[] = products.map((product) => {
    const carbs =
      product.carbsPerServing && product.serving
        ? (product.serving / 100) * product.carbsPerServing
        : 0
    const fiber =
      product.fiberPerServing && product.serving
        ? (product.serving / 100) * product.fiberPerServing
        : 0
    const percentageCarbs = carbs ? carbs / totalCarbs : 0
    const percentageGlycemicValue =
      percentageCarbs && product.gi ? percentageCarbs * product.gi : 0
    return {
      carbs,
      fiber,
      percentageCarbs,
      percentageGlycemicValue,
      ...product,
    }
  })

  const totalGlycemicValue: number = calculatedProducts.reduce(
    (acc, product) => {
      if (!product.percentageGlycemicValue) return acc
      return acc + product.percentageGlycemicValue
    },
    0,
  )

  const glycemicLoad: number = (totalGlycemicValue * netCarbs) / 100

  let resultCssClass: string = ''
  if (glycemicLoad > 20) {
    resultCssClass = 'text-red-500'
  } else if (glycemicLoad > 10) {
    resultCssClass = 'text-yellow-500'
  } else if (glycemicLoad > 0) {
    resultCssClass = 'text-green-500'
  } else {
    resultCssClass = 'text-slate-900'
  }

  return (
    <div className="relative w-96 mx-auto">
      <span className="absolute bottom-6 -left-6 block w-12 h-12 rounded-full bg-gradient-to-b from-amber-400 to-orange-500"></span>
      <span className="absolute -top-6 -right-10 block w-24 h-24 rounded-full bg-gradient-to-b from-amber-400 to-orange-500"></span>
      <div className="relative rounded-2xl w-full py-10 text-center bg-white">
        <div className="mb-2 font-light text-2xl">Glycemic Load</div>
        <div className={`font-bold text-5xl ${resultCssClass}`}>
          {glycemicLoad.toFixed(2)}
        </div>
      </div>
    </div>
  )
}

export default CalculatorResult
