import React, { FC, MouseEvent, MouseEventHandler, useState } from 'react'
import * as classes from './SortPanel.module.scss'

interface SortPanelProps {
  setFilter: (val: string) => void
}

export const SortPanel:FC<SortPanelProps> = ({ setFilter }) => {
  const [isActive, setIsActive] = useState<string>('')
  console.log(isActive)
  
  return (
    <div className={classes.panel}>
        <span>Sort by:</span>
        <ul>
        <li
          className={isActive === 'name' && classes.active}
          onClick={() => {
          setFilter('name')
          setIsActive('name')
          }}
        >
          Name
        </li>
        <li
          className={isActive === 'rating' && classes.active}
          onClick={() =>
          {
            setFilter('rating')
            setIsActive('rating')
          }}
        >
          Rating
        </li>
        <li
          className={isActive === 'difficulty' && classes.active}
          onClick={() =>
          {
            setFilter('difficulty')
            setIsActive('difficulty')
          }
          }
        >
          Difficulty
        </li>
        </ul>
      </div>
  )
}
