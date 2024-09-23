import { IRecipe } from '@/types/types';
import axios from 'axios';
import { FC, ReactNode, useEffect, useState } from 'react';
import { RecipeCard } from './RecipeCard/RecipeCard';

export const App:FC = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([])

useEffect(() => {
  fetchRecipes()
}, [])

async function fetchRecipes() {
  try {
    const response = await axios.get<{recipes: IRecipe[]}>('https://dummyjson.com/recipes')
    setRecipes(response.data.recipes)
  } catch (error) {
    alert(error)
  }
}

  return (
    <div>
      Hello
      {
        recipes.map((recipe: IRecipe): ReactNode => {
        return (
          <RecipeCard recipe={recipe} />
        )
        })
      }
    </div>
  )
}
