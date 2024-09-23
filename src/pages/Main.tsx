import { RecipeCard } from '@/components/RecipeCard/RecipeCard'
import { IRecipe } from '@/types/types'
import axios from 'axios'
import React, { ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Main = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([])
  const router = useNavigate();

  useEffect(() => {
    fetchRecipes()
  }, [])

  async function fetchRecipes() {
    try {
      const response = await axios.get<{ recipes: IRecipe[] }>('https://dummyjson.com/recipes', {
        params: {
          limit: 16,
        }
      })
      setRecipes(response.data.recipes)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='container' style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem'}}>
      {
        recipes.map((recipe: IRecipe): ReactNode => {
        return (
          <RecipeCard recipe={recipe} key={recipe.id} onClick={() => router(`/recipes/${recipe.id}`)}/>
        )
        })
      }
    </div>
  )
}
