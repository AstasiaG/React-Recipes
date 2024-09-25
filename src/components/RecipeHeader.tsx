import React, { FC, useContext } from 'react'
import Star from '@/assets/star.svg'
import { IRecipe } from '@/types/types'
import { SearchContext } from '@/context'
import { Navigate, useNavigate } from 'react-router-dom'

interface RecipeHeaderProps {
  recipe: IRecipe
  classes: {[key: string]: string}
}

export const RecipeHeader: FC<RecipeHeaderProps> = ({ recipe, classes }) => {
  const { setIsMeal, setIsTag, setQuery } = useContext(SearchContext)
  const router = useNavigate()
  return (
    <div className={classes.header}>
      <div className={classes.d}>
        <div>
          {recipe.mealType.map((type: string, id: number) =>
            <span
              className={classes.type}
              key={id}
              onClick={() => {
                setIsMeal(true)
                setQuery(type)
                router('/')
              }}
            >
              {type}
            </span>
          )}
        </div>
          <div className={classes.rating}>
            <Star />
            {recipe.rating}
          </div>
        </div>
        <h4 className={classes.title}>{recipe.name}</h4>
        <ul className={classes.tags}>
          {recipe.tags.map((tag: string, index: number) => 
            <li
              key={index}
              onClick={() => {
                setIsTag(true)
                setQuery(tag)
                router('/')
                }
              }
            >
              { tag }
            </li>
          )}
      </ul>
    </div>
  )
}
