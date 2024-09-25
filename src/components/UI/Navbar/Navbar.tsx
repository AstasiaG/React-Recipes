import React, { ChangeEvent, useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import * as classes from './Navbar.module.scss'
import { SearchContext } from '@/context'

export const Navbar = () => {
  const { setQuery, setIsSearch } = useContext(SearchContext);
  const router = useNavigate()
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
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setQuery(e.target.value)
          e.target.value ? (
            setIsSearch(true),
            router('/')
          ) :
          setIsSearch(false)
        }}
          />
    </div>
  )
}
