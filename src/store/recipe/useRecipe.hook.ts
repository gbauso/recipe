import Recipe from '@/models/recipe';
import { Dispatch, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../root.reducer';
import { ADD_RECIPE, RecipeTypes, RecipesState } from './recipe.types';

const useRecipe = () => {
  const { records } = useSelector<AppState, RecipesState>(
    ({ recipe }) => recipe
  );

  const dispatch = useDispatch<Dispatch<RecipeTypes>>();

  const sortedRecords = useMemo(
    () =>
      records.sort(
        (a, b) =>
          new Date(b.dateAdded!).getTime() - new Date(a.dateAdded!).getTime()
      ),
    [records]
  );

  const addRecipe = useCallback(
    (recipe: Recipe) => {
      dispatch({
        type: ADD_RECIPE,
        payload: { ...recipe, dateAdded: new Date() },
      });
    },
    [dispatch]
  );

  return {
    recipes: sortedRecords,

    addRecipe,
  };
};

export default useRecipe;
