import Service from '@/API/Service'
import { RecipesList } from '@/components/RecipesList/RecipesList'
import { TagsCloud } from '@/components/TagsCloud/TagsCloud'
import { SortPanel } from '@/components/UI/SortPanel/SortPanel'
import { SearchContext } from '@/context'
import { useFetching } from '@/hooks/useFetch'
import { useSearch } from '@/hooks/useSearch'
import React, { useContext, useEffect, useState } from 'react'

export const SearchResult = () => {
  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(8)
  const [total, setTotal] = useState<number>(0)
  const {isSearch, isTag, isMeal, setRecipes, query, filter, setFilter } = useContext(SearchContext)
  const url = useSearch(query, filter, isSearch, isMeal, isTag);

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
      <h2>{query}</h2>
      <div className='grid_container'>
        <RecipesList total={total} limit={limit} page={page} setPage={setPage}/>
        <TagsCloud />
      </div>
    </div>
  )
}
