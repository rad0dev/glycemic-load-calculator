import { FC, useContext } from 'react'
import { CalculatorContext } from '@/store/calculatorContext'

const CalculatorResult: FC = () => {
  const { products } = useContext(CalculatorContext)
  // let calculatedProducts = []

  // const totalCarbs = products.reduce((acc, product) => {
  //   return acc + product.carbs
  // }, 0)

  // products.forEach((product) => {
  //   // calculatedProducts[] = {
  //   //     percentageCarbs: product.carbs / totalCarbs,
  //   //     ...product
  //   // }
  //   })

  // const glycemicLoad = products.reduce((acc, product) => {
  //   product.glycemicLoad = product.gi * product.carbs / 100

  //   return acc + product.glycemicLoad

  // }

  return (
    <div className="mt-6">
      <div className="font-display tracking-tight text-slate-900 text-xl">
        Glycemic Load
      </div>
      <div className="font-display tracking-tight text-slate-900 text-5xl">
        29
      </div>
    </div>
  )
}

export default CalculatorResult
