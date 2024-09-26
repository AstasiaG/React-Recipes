import { RecipesList } from '@/components/RecipesList/RecipesList'
import { SearchContext } from '@/context'
import { useSearch } from '@/hooks/useSearch'
import { IRecipe } from '@/types/types'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const SearchResult = () => {
  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(8)
  const [total, setTotal] = useState<number>(0)
  const {isSearch, isTag, isMeal, setRecipes, query } = useContext(SearchContext)
  const url = useSearch(query, isSearch, isMeal, isTag);

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

  return (
    <div className='container'>
      <h2>{ query }</h2>
      <RecipesList total={total} limit={limit} page={page} setPage={setPage} />
    </div>
  )
}
