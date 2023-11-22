class Product {
  id: string
  name?: string
  serving?: number
  carbsPerServing?: number
  fiberPerServing?: number
  gi?: number

  constructor() {
    this.id = new Date().toISOString()
  }
}

export default Product
