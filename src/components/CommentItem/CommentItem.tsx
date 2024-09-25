import React, { FC } from 'react'
import * as classes from './CommentItem.module.scss'
import { IComment } from '@/types/types'

interface CommentItemProps {
  comment: IComment
}

export const CommentItem: FC<CommentItemProps> = ({ comment }) => {
  return (
    <div className={ classes.item}>
      <p className={ classes.name}> {comment.user.username}</p>
      <p className={ classes.text}>{ comment.body }</p>
    </div>
  )
}
