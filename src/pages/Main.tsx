import { RecipeCard } from '@/components/RecipeCard/RecipeCard'
import { Pagination } from '@/components/UI/Pagination/Pagination'
import { IRecipe } from '@/types/types'
import axios from 'axios'
import React, { ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Main = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([])
  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(8)
  const [total, setTotal] = useState<number>(0)
  const router = useNavigate();

  useEffect(() => {
    fetchRecipes()
  }, [page, limit])

  async function fetchRecipes() {
    try {
      const response = await axios.get<{ recipes: IRecipe[], total: number }>('https://dummyjson.com/recipes', {
        params: {
          limit: limit,
          skip: limit * (page - 1),
        }
      })
      setTotal(response.data.total)
      setRecipes(response.data.recipes)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='container'>
      <div  style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', margin: '4rem 0' }}>
        {
          recipes.map((recipe: IRecipe): ReactNode => {
          return (
            <RecipeCard recipe={recipe} key={recipe.id} onClick={() => router(`/recipes/${recipe.id}`)}/>
          )
          })
        }
      </div>
      <Pagination total={total} limit={limit} page={page} setPage={setPage} />
    </div>
  )
}
