import React, { FC } from 'react'
import * as classes from './RecipeCard.module.scss'
import { IRecipe } from '@/types/types';
import Star from '@/assets/star.svg'
import { RecipeHeader } from '../RecipeHeader';

interface RecipeCardProps {
  recipe: IRecipe;
  onClick?: () => void
}

export const RecipeCard: FC<RecipeCardProps> = ({recipe, onClick}) => {
  return (
    <div className={classes.card} onClick={onClick}>
      <img src={recipe.image} alt={`${recipe.name} image`} className={classes.image} />
      <RecipeHeader recipe={recipe} classes={classes} />
    </div>
  )
}
