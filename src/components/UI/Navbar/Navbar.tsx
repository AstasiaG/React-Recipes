import React, { ChangeEvent, KeyboardEvent, useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import * as classes from './Navbar.module.scss'
import { SearchContext } from '@/context'
import { Input } from '../Input/Input'

export const Navbar = () => {
  const { setQuery, setIsSearch} = useContext(SearchContext);
  const [value, setValue] = useState<string>('')
  const router = useNavigate()
  return (
    <div className={classes.navbar}>
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive ? `${classes.link} ${classes.active}` : classes.link
        }
        onClick={() => {
          setQuery('')
          setValue('')
        }}
      >
        All Recipes
      </NavLink>
      <Input
        type='text'
        placeholder='Find a recipe...'
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setQuery(e.target.value)
          setValue(e.target.value)
          !e.target.value &&
              router('/')
        }}
        onKeyDown={(event: KeyboardEvent) => {
          if (event.key === 'Enter') {
            value ? 
              setIsSearch(true)
              :
              setIsSearch(false)

            router('/' + value)
          }
        }}
          />
    </div>
  )
}
