import Service from '@/API/Service'
import { RecipesList } from '@/components/RecipesList/RecipesList'
import { TagsCloud } from '@/components/TagsCloud/TagsCloud'
import { SortPanel } from '@/components/UI/SortPanel/SortPanel'
import { SearchContext } from '@/context'
import { useFetching } from '@/hooks/useFetch'
import { useSearch } from '@/hooks/useSearch'
import { IRecipe } from '@/types/types'
import { totalTime } from '@/utils/TotalTime'
import React, { FC, ReactNode, useContext, useEffect, useMemo, useState } from 'react'

export const Main = () => {
  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(12)
  const [total, setTotal] = useState<number>(0)
  const { isSearch, setRecipes, query, setFilter, filter, recipes} = useContext(SearchContext)
  const url = useSearch(query, filter, isSearch);

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
      <SortPanel setFilter={ setFilter} />
      <div className='grid_container'>
        <RecipesList total={total} limit={limit} page={page} setPage={setPage} />
        <TagsCloud />
      </div>
    </div>
  )
}
