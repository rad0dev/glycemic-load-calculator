import { createContext, FC, PropsWithChildren, useState } from 'react'

import Product from '@/models/product'

type CalculatorContextObj = {
  products: Product[]
  addProduct: () => void
  removeProduct: (id: string) => void
}

export const CalculatorContext = createContext<CalculatorContextObj>({
  products: [],
  addProduct: () => {},
  removeProduct: (id: string) => {},
})

const CalculatorContextProvider: FC<PropsWithChildren> = (props) => {
  const [products, setProducts] = useState<Product[]>([])

  const addProductHandler = () => {
    const newProduct = new Product()

    setProducts((prevProducts) => {
      return prevProducts.concat(newProduct)
    })

    console.log(products)
  }

  const removeProductHandler = (productId: string) => {
    setProducts((prevProducts) => {
      return prevProducts.filter((product) => product.id !== productId)
    })
  }

  const contextValue: CalculatorContextObj = {
    products,
    addProduct: addProductHandler,
    removeProduct: removeProductHandler,
  }

  return (
    <CalculatorContext.Provider value={contextValue}>
      {props.children}
    </CalculatorContext.Provider>
  )
}

export default CalculatorContextProvider
