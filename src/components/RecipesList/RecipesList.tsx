import React, { FC, ReactNode } from 'react'
import { Pagination } from '../UI/Pagination/Pagination'
import * as classes from './RecipesList.module.scss'
import { IRecipe } from '@/types/types'
import { RecipeCard } from '../RecipeCard/RecipeCard'
import { useNavigate } from 'react-router-dom'

interface RecipeListProps {
  recipes: IRecipe[]
  total: number
  limit: number
  page: number
  setPage: (page: number) => void
}

export const RecipesList:FC<RecipeListProps> = ({ recipes, total, limit, page, setPage}) => {
  const router = useNavigate()
  return (
    <div className={classes.wrapper}>
      <div className={classes.list}>
      {
        recipes.map((recipe: IRecipe): ReactNode => {
        return (
          <RecipeCard recipe={recipe} key={recipe.id} onClick={() => router(`/recipes/${recipe.id}`)}/>
        )
        })
      }
      </div>
      <Pagination total={total} limit={limit} page={page} setPage={setPage}/>
    </div>
  )
}
