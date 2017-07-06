import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

import { epicRoot } from './rootReducer';
import rootReducer from './rootReducer';

const epicMiddleware = createEpicMiddleware(epicRoot);

const store = createStore(
  rootReducer,
  applyMiddleware(
    logger,
    epicMiddleware
  )
)

export default store;
