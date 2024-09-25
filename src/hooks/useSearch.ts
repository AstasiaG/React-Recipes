import { useMemo } from "react";

export const useSearch = (isMeal: boolean, isSearch: boolean, isTag: boolean, query: string) => {
  let url: string = ''

  console.log('work')
  const SearchRecipe = useMemo(() => {

    console.log('start')
    if (isSearch) {
      url = 'https://dummyjson.com/recipes/search?q=' + query;
    } else if (isTag) {
      url = 'https://dummyjson.com/recipes/tag/' + query;
    } else if (isMeal) {
      url = 'https://dummyjson.com/recipes/meal-type/' + query;
    } else {
      url = 'https://dummyjson.com/recipes';
    }

    return url;

  },[ isMeal, isSearch, isTag])

  return SearchRecipe
}