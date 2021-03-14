import { ADD_RECIPE, RecipesState, RecipeTypes } from './recipe.types';

const initialState: RecipesState = {
  records: [],
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
