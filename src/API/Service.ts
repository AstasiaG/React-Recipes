import { IComment, IRecipe } from '@/types/types';
import axios from 'axios';

export default class Service { 

  static async getRecipes(limit = 10, page = 1, url: string) {

    const response = await axios.get<{ recipes: IRecipe[], total: number }>(url, {

      params: {
        limit: limit,
        skip: limit * (page - 1),
      }
    });

    return response;
  }

  static async getComments( id: string) {

    const response = await axios.get<{comments: IComment[]}>(('https://dummyjson.com/comments/post/' + id));
    
    return response;
  }

  static async getTags() {

    const response = await axios.get<string[]>('https://dummyjson.com/recipes/tags');
    
    return response;
  }

}