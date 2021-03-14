/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore, compose } from 'redux';

import rootReducer from './root.reducer';

const composeOptions = [];
const reduxDevTools =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__();
if (
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  process.env.ENVIRONMENT !== 'production'
)
  composeOptions.push(reduxDevTools);

const store = createStore(rootReducer, compose(...composeOptions));

export default store;
