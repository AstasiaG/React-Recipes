import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IComment } from '@/types/types'
import axios from 'axios'
import * as classes from './Comments.module.scss'
import { CommentItem } from '../CommentItem/CommentItem'

export const Comments = () => {
  const params = useParams()
  const [comments, setComments] = useState<IComment[]>([])

  useEffect(() => {
    fetchComments()
  }, [params])

  async function fetchComments() {
    try {
      const response = await axios.get<{comments: IComment[]}>('https://dummyjson.com/comments/post/' + params.id)
      setComments(response.data.comments)
    } catch (error) {
      console.log(error)
    }
  }

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
