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
    <div className="mt-6">
      <div className="font-display tracking-tight text-slate-900 text-xl">
        Glycemic Load
      </div>
      <div className={`font-display tracking-tight text-5xl ${resultCssClass}`}>
        {glycemicLoad.toFixed(2)}
      </div>
    </div>
  )
}

export default CalculatorResult
