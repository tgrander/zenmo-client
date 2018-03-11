import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './modules/rootEpic';
import rootReducer from './modules/rootReducer';


const epicMiddleware = createEpicMiddleware(rootEpic);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, epicMiddleware)),
);

// const store = createStore(
//   rootReducer,
//   applyMiddleware(
//     logger,
//     epicMiddleware,
//   ),
// );

export default store;
