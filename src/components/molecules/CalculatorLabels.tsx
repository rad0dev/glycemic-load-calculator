import { FC } from 'react'

const CalculatorLabels: FC = () => {
  const labelCommonClasses = 'px-1 text-xs font-light uppercase text-purple-950'

  return (
    <div className="flex -mx-2 mb-2">
      <div className={`flex-1 mx-2 ${labelCommonClasses}`}>Food</div>
      <div className={`flex-none w-24 mx-2 ${labelCommonClasses}`}>Serving</div>
      <div className={`flex-none w-24 mx-2 ${labelCommonClasses}`}>Carbs</div>
      <div className={`flex-none w-24 mx-2 ${labelCommonClasses}`}>Fiber</div>
      <div className={`flex-none w-24 mx-2 ${labelCommonClasses}`}>GI</div>
      <div className={`flex-none w-24 mx-2 ${labelCommonClasses}`}></div>
    </div>
  )
}

export default CalculatorLabels
