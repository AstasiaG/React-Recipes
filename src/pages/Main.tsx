import { RecipesList } from '@/components/RecipesList/RecipesList'
import { IRecipe } from '@/types/types'
import axios from 'axios'
import React, { FC, ReactNode, useEffect, useMemo, useState } from 'react'

interface MainProps {
  filter: string
  setFilter: (filter: string) => void
}

export const Main:FC<MainProps> = ({ filter, setFilter}) => {
  const [recipes, setRecipes] = useState<IRecipe[]>([])
  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(8)
  const [total, setTotal] = useState<number>(0)
  const [url, setUrl] = useState<string>('https://dummyjson.com/recipes');

  useEffect(() => {
    fetchRecipes(url)
  }, [page, limit, url])

  async function fetchRecipes(url: string) {
    try {
      const response = await axios.get<{ recipes: IRecipe[], total: number }>(url, {
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

  const SearchRecipe = useMemo(() => {
    filter ?
      setUrl('https://dummyjson.com/recipes/search?q=' + filter)
      :
      setUrl('https://dummyjson.com/recipes')
  },[filter])

  return (
    <div className='container'>
      <RecipesList recipes={recipes} total={total} limit={limit} page={page} setPage={setPage} />
    </div>
  )
}
