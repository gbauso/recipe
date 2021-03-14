import Recipe from '@/models/recipe';

export type RecipesState = {
  records: Recipe[];
};

export const ADD_RECIPE = 'ADD_RECIPE';

type addRecipe = {
  type: typeof ADD_RECIPE;
  payload: Recipe;
};

export type RecipeTypes = addRecipe;
