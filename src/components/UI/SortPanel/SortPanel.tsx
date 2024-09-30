import React, { FC, MouseEvent, MouseEventHandler, useState } from 'react'
import * as classes from './SortPanel.module.scss'

interface SortPanelProps {
  setFilter: (val: string) => void
  setLimit: (val: number) => void
}

export const SortPanel:FC<SortPanelProps> = ({ setFilter,setLimit }) => {
  const [isActive, setIsActive] = useState<string>('')
  
  return (
    <div className={classes.wrapper}>
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
      <div className={classes.quantity}>
        <span>Per page:</span>
        <select
          onChange={(event) => setLimit(Number(event.target.value))}
        >
          <option value={9}>9</option>
          <option value={18}>18</option>
          <option value={36}>36</option>
          <option value={-1}>All</option>
        </select>
      </div>
    </div>
  )
}
