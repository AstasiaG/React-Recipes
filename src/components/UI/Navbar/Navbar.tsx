import React, { ChangeEvent, FC } from 'react'
import { NavLink } from 'react-router-dom'
import * as classes from './Navbar.module.scss'

interface NavbarProps {
  setFilter: (filter: string) => void
}

export const Navbar:FC<NavbarProps> = ({setFilter}) => {
  return (
    <div className={classes.navbar}>
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive ? `${classes.link} ${classes.active}` : classes.link
        }
      >
        All Recipes
      </NavLink>
      <input
        type='text'
        placeholder='Find a recipe...'
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setFilter(e.target.value)} 
          />
    </div>
  )
}
