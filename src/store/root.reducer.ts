import { combineReducers } from 'redux';
import recipe from './recipe/recipe.reducer';

const rootReducer = combineReducers({ recipe });

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
