import Service from '@/API/Service'
import { useFetching } from '@/hooks/useFetch'
import React, { useContext, useEffect, useState } from 'react'
import * as classes from './TagsCloud.module.scss'
import { SearchContext } from '@/context'
import { useNavigate } from 'react-router-dom'

export const TagsCloud = () => {
  const [tags, setTags] = useState<string[]>([])
  const { setIsTag, setQuery } = useContext(SearchContext)
  const router = useNavigate()

  const [fetchTags, error] = useFetching(async ({}) => {

    const response = await Service.getTags()

    setTags(response.data)
  })

  useEffect(() => {
    fetchTags({})

  }, [tags.length])

  return (
    <aside className={classes.wrapper}>
      <h3>Tags</h3>
      <ul>
        {tags.map((tag: string, id: number) =>
          <li
          key={id}
          onClick={() => {
            setIsTag(true)
            setQuery(tag)
            router('/'  + tag)
            }
          }
          >
            {tag}
          </li>
        )}
      </ul>
    </aside>
  )
}
