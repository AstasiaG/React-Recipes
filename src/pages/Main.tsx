import { RecipeCard } from '@/components/RecipeCard/RecipeCard'
import { Navbar } from '@/components/UI/Navbar/Navbar'
import { Pagination } from '@/components/UI/Pagination/Pagination'
import { IRecipe } from '@/types/types'
import axios from 'axios'
import React, { ReactNode, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Main = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([])
  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(8)
  const [total, setTotal] = useState<number>(0)
  const [filter, setFilter] = useState<string>('')
  const [url, setUrl] = useState<string>('https://dummyjson.com/recipes');
  const router = useNavigate();

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
      <Navbar setFilter={setFilter} />
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
