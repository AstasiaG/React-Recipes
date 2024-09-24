import React, { FC, ReactNode } from 'react'
import * as classes from './RecipePageItem.module.scss'
import { IRecipe } from '@/types/types'
import Star from '@/assets/star.svg'

interface RecipePageItemProps {
  item: IRecipe
}

export const RecipePageItem: FC<RecipePageItemProps> = ({ item }) => {
  return (
    <div className={classes.recipe}>
      <div className={classes.top}>
        <div className={classes.image}>
          <img src={ item.image} alt='' />
        </div>
        <div className={classes.info}>
          <div className={classes.header}>
            <div className={classes.d}>
              <span>{item.mealType.join(' ')}</span>
              <div>
                <Star />
                {item.rating}
              </div>
            </div>
            <h2 className={classes.title}>{item.name}</h2>
            <ul className={classes.tags}>
              {item.tags.map((tag: string): ReactNode => {
                return <li>{tag}</li>
                })
              }
            </ul>
          </div>

          <div className={classes.ingredients}>
            <h3 className={classes.title}>Ingredients</h3>
            <ul className={classes.list}>
              {item.ingredients.map((ingredient: string): ReactNode => {
                return <li >{ingredient}</li>
                })
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
            <span>{ `${Number(item.prepTimeMinutes) + Number(item.cookTimeMinutes)} min` }</span>
          </div>
        </div>
      </div>
    </div>
  )
}
