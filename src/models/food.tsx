class Food {
  id: string
  name?: string
  serving?: number
  carbs?: number
  fiber?: number
  gi?: number

  constructor() {
    this.id = new Date().toISOString()
  }
}

export default Food
