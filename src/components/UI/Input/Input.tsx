import React, { ChangeEvent, KeyboardEvent, FC } from 'react'
import * as classes from './Input.module.scss'

interface InputProps {
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: KeyboardEvent) => void
}

export const Input: FC<InputProps> = (props) => {
  return (
    <input className={ classes.input} {...props} />
  )
}
