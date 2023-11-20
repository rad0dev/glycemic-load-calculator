import { createContext, FC, PropsWithChildren, useState } from 'react'

import Product from '@/models/product'

type CalculatorContextObj = {
  products: Product[]
  addProduct: () => void
  removeProduct: (id: string) => void
  updateProduct: (
    id: string,
    key: keyof Product,
    value: string | number,
  ) => void
}

export const CalculatorContext = createContext<CalculatorContextObj>({
  products: [],
  addProduct: () => {},
  removeProduct: (id: string) => {},
  updateProduct: (id: string, key: keyof Product, value: string | number) => {},
})

const CalculatorContextProvider: FC<PropsWithChildren> = (props) => {
  const [products, setProducts] = useState<Product[]>([])

  const addProductHandler = () => {
    const newProduct = new Product()

    setProducts((prevProducts) => {
      return prevProducts.concat(newProduct)
    })
  }

  const removeProductHandler = (productId: string) => {
    setProducts((prevProducts) => {
      return prevProducts.filter((product) => product.id !== productId)
    })
  }

  const updateProductHandler = (
    productId: string,
    key: keyof Product,
    value: string | number,
  ) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            [key]: value,
          }
        }
        return product
      })
    })
  }

  const contextValue: CalculatorContextObj = {
    products,
    addProduct: addProductHandler,
    removeProduct: removeProductHandler,
    updateProduct: updateProductHandler,
  }

  return (
    <CalculatorContext.Provider value={contextValue}>
      {props.children}
    </CalculatorContext.Provider>
  )
}

export default CalculatorContextProvider
