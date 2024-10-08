import React, { FC, ReactNode } from 'react'
import * as classes from './RecipePageItem.module.scss'
import { IRecipe } from '@/types/types'
import { RecipeHeader } from '../RecipeHeader'
import { totalTime } from '@/utils/TotalTime'

interface RecipePageItemProps {
  item: IRecipe
}

export const RecipePageItem: FC<RecipePageItemProps> = ({ item }) => {
  const fullTime = totalTime(item.prepTimeMinutes, item.cookTimeMinutes)
  return (
    <div className={classes.recipe}>
      <div className={classes.top}>
        <div className={classes.image}>
          <img src={ item.image} alt='' />
        </div>
        <div className={classes.info}>
          <RecipeHeader recipe={item} classes={classes} />

          <div className={classes.ingredients}>
            <p className={classes.difficulty}>Difficulty: <span>{ item.difficulty}</span></p>
            <h3 className={classes.title}>Ingredients</h3>
            <ul className={classes.list}>
              {item.ingredients.map((ingredient: string,id: number) => 
                 <li key={id}>{ingredient}</li>
                )
              }
            </ul>
          </div>
        </div>
      </div>

      <div className={classes.bottom}>
        <div className={classes.directions}>
          <h3 className={classes.title}>Directions</h3>
          <ul className={classes.list}>
            {item.instructions.map((step: string, index: number): ReactNode => {
              return (
                <li>
                  {/* <span>{`${index + 1} Step`}</span> */}
                  <p>{ step }</p>
                </li>
              )
            } )}
          </ul>
        </div>
        <div className={classes.times}>
          <div className={classes.item}>
            <span>Servings</span>
            <span>{item.servings}</span>
          </div>
          <div className={classes.item}>
            <span>Cook Time</span>
            <span>{ `${item.cookTimeMinutes} min`}</span>
          </div>
          <div className={classes.item}>
            <span>Preparing Time</span>
            <span>{ `${item.prepTimeMinutes} min`}</span>
          </div>
          <div className={classes.item}>
            <span>Total Time</span>
            <span>{ `${fullTime} min` }</span>
          </div>
        </div>
      </div>
    </div>
  )
}
