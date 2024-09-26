import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IComment } from '@/types/types'
import * as classes from './Comments.module.scss'
import { CommentItem } from '../CommentItem/CommentItem'
import { useFetching } from '@/hooks/useFetch'
import Service from '@/API/Service'

export const Comments = () => {
  const {id} = useParams()
  const [comments, setComments] = useState<IComment[]>([])
  const [fetchComments, error] = useFetching(async ({id}) => {

    const response = await Service.getComments(id)

    setComments(response.data.comments)
  })

  useEffect(() => {
    fetchComments({id})

  }, [])


  return (
    <div className={ classes.wrapper}>
      <h3>Comments</h3>
      <div >
        {comments.length > 0 ?
          comments.map((comment: IComment) =>
            <CommentItem comment={comment} />
          )
          :
          <p className={ classes.subtitle }>While nobody left any comments</p>
      }
      </div>
    </div>
  )
}
