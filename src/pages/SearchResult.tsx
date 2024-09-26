import Service from '@/API/Service'
import { RecipesList } from '@/components/RecipesList/RecipesList'
import { SearchContext } from '@/context'
import { useFetching } from '@/hooks/useFetch'
import { useSearch } from '@/hooks/useSearch'
import React, { useContext, useEffect, useState } from 'react'

export const SearchResult = () => {
  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(8)
  const [total, setTotal] = useState<number>(0)
  const {isSearch, isTag, isMeal, setRecipes, query } = useContext(SearchContext)
  const url = useSearch(query, isSearch, isMeal, isTag);

  const [fetchRecipes, error] = useFetching(async ({limit, page, url}) => {
    
    const response = await Service.getRecipes(limit, page, url)

    setTotal(response.data.total)
    setRecipes(response.data.recipes)
  })

  useEffect(() => {
    fetchRecipes({limit, page, url})

  }, [page, limit, url])

  return (
    <div className='container'>
      <h2>{ query }</h2>
      <RecipesList total={total} limit={limit} page={page} setPage={setPage} />
    </div>
  )
}
