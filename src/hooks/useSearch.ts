import { useMemo } from "react";

export const useSearch = (query: string, isSearch?: boolean, isMeal?: boolean, isTag?: boolean) => {
  let url: string = ''

  const SearchRecipe = useMemo(() => {

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