import React, { FC, MouseEvent, MouseEventHandler, useState } from 'react'
import * as classes from './SortPanel.module.scss'
import { Select } from '../Select/Select'

interface SortPanelProps {
  setFilter: (val: string) => void
  setLimit: (val: number) => void
  limit: number
}

export const SortPanel:FC<SortPanelProps> = ({ setFilter,setLimit, limit }) => {
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
          }}
        >
          Difficulty
        </li>
        </ul>
      </div>
      <div className={classes.quantity}>
        <span>Per page:</span>
        <Select
          value={limit}
          onChange={(value: number) => setLimit(value)}
          defaultValue=""
          options={[
            {value: 9, name: '9'},
            {value: 18, name: '18'},
            { value: 36, name: '36' },
            {value: -1, name: 'All'},
          ]}
        >
        </Select>
      </div>
    </div>
  )
}
