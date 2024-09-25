import { RecipesList } from '@/components/RecipesList/RecipesList'
import { SearchContext } from '@/context'
import { useSearch } from '@/hooks/useSearch'
import { IRecipe } from '@/types/types'
import axios from 'axios'
import React, { FC, ReactNode, useContext, useEffect, useMemo, useState } from 'react'

export const Main = () => {
  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(8)
  const [total, setTotal] = useState<number>(0)
  // const [url, setUrl] = useState<string>('https://dummyjson.com/recipes');
  const { query, isSearch, isTag, isMeal, recipes, setRecipes } = useContext(SearchContext)
  const url = useSearch(isMeal, isSearch, isTag, query);

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

  // const SearchRecipe = useMemo(() => {
  //   if (isSearch) {
  //     setUrl('https://dummyjson.com/recipes/search?q=' + query)
  //   } else if (isTag) {
  //     setUrl('https://dummyjson.com/recipes/tag/' + query)
  //   } else if (isMeal) {
  //     setUrl('https://dummyjson.com/recipes/meal-type/' + query)
  //   } else {
  //     setUrl('https://dummyjson.com/recipes')
  //   }

  // },[ isMeal, isSearch, isTag])

  return (
    <div className='container'>
      <RecipesList total={total} limit={limit} page={page} setPage={setPage} />
    </div>
  )
}
