export interface IRecipe {
  id: number
  name: string
  ingredients: string[]
  instructions: string[]
  servings: number
  prepTimeMinutes: number
  cookTimeMinutes: number
  difficulty: string
  cuisine: string
  tags: string[]
  image: string
  rating: number
  mealType: string[]
}

export interface IComment {
  id: number
  body: string
  user: {
    username: string
  }
}