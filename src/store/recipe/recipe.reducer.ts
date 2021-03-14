import Recipe from '@/models/recipe';
import { ADD_RECIPE, RecipesState, RecipeTypes } from './recipe.types';

const testRecipe: Recipe = {
  dateAdded: new Date(),
  ingredients: [],
  name: 'Meu Pato',
  id: 'xy',
  steps: [],
};

const initialState: RecipesState = {
  records: [testRecipe],
};

const recipe = (state = initialState, action: RecipeTypes) => {
  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        records: [action.payload, ...state.records],
      };
    default:
      return state;
  }
};

export default recipe;
