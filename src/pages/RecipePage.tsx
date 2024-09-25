import { IRecipe } from '@/types/types'
import axios from 'axios'
import React, { ReactNode, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RecipePageItem } from '@/components/RecipePageItem/RecipePageItem'
import { Comments } from '@/components/Comments/Comments'

export const RecipePage = () => {
  const params = useParams()
  const [recipe, setRecipe] = useState<IRecipe>()
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRecipe()
  }, [])

  async function fetchRecipe() {
    try {
      const response = await axios.get('https://dummyjson.com/recipes/' + params.id)
      setRecipe(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='container'>
      {isLoading ? <h2>Loading...</h2> :
        <RecipePageItem item={ recipe } />
      }
      <Comments />
    </div>
  )
}
