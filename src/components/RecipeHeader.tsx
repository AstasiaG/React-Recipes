import React, { FC } from 'react'
import Star from '@/assets/star.svg'
import { IRecipe } from '@/types/types'

interface RecipeHeaderProps {
  recipe: IRecipe
  classes: {[key: string]: string}
}

export const RecipeHeader:FC<RecipeHeaderProps> = ({ recipe, classes }) => {
  return (
    <div className={classes.header}>
      <div className={classes.d}>
          <span className={classes.type}>{recipe.mealType.join(' / ')}</span>
          <div className={classes.rating}>
            <Star />
            {recipe.rating}
          </div>
        </div>
        <h4 className={classes.title}>{recipe.name}</h4>
        <ul className={classes.tags}>
          {recipe.tags.map((tag: string, index: number) => 
            <li key={index}>
              { tag }
            </li>
          )}
      </ul>
    </div>
  )
}
