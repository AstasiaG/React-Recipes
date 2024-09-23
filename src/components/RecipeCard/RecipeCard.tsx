import React, { FC } from 'react'
import * as classes from './RecipeCard.module.scss'
import { IRecipe } from '@/types/types';
import Star from '@/assets/star.svg'

interface RecipeCardProps {
  recipe: IRecipe;
  onClick?: (recipe: IRecipe) => void
}

export const RecipeCard: FC<RecipeCardProps> = ({recipe, onClick}) => {
  return (
    <div className={classes.card}>
      <img src={recipe.image} alt={`${recipe.name} image`} className={classes.image} />
      <div className={classes.d}>
        <span className={classes.type}>{recipe.mealType}</span>
        <div className={classes.rating}>
          <Star />
          {recipe.rating}
        </div>
      </div>
      <h4 className={classes.title}>{recipe.name}</h4>
      <ul className={classes.tags}>
        {recipe.tags.map((tag: string) => 
          <li>
            { tag }
          </li>
        )}
      </ul>
    </div>
  )
}
