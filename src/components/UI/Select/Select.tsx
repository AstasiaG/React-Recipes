import React, { FC } from 'react'
import * as classes from './Select.module.scss'

interface SelectProps {
  options: {value: number | string, name: string}[]
  defaultValue: string
  value: number | string
  onChange: (value?: number | string) => void
}

export const Select:FC<SelectProps> = ({options, defaultValue, value, onChange}) => {

  return (
    <select
      className={classes.select}
      value={value}
      onChange={event => onChange(event.target.value)}
    >
      <option value='' disabled>{ defaultValue}</option>
      {options.map(option => 
          <option key={ option.value}  value={option.value}>
            {option.name}
          </option>
        )
      }
    </select>
  )
};
