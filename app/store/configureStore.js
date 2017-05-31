import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from 'reducers';
import createSagaMiddleware from 'redux-saga';
import sagas from 'sagas';

export default(initialState = {}) => {
  const middlewares = [];

  // Create the saga middleware
  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);

  // Create and export the store
  let createStoreWithMiddleware = applyMiddleware(...middlewares);

  // Create the logger
  if (process.env.NODE_ENV !== 'production') {
    const LOGGING_BLACKLIST = ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED'];
    const logger = createLogger({
      collapsed: true,
      predicate: (getState, action) => !LOGGING_BLACKLIST.includes(action.type)
    });
    middlewares.push(logger);

    // CHROME REDUX DEVTOOLS
    /* eslint-disable */
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    /* eslint-enable */

    // Create and export the store
    createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middlewares));
  }

  const finalCreateStore = createStoreWithMiddleware(createStore);
  const store = finalCreateStore(reducers, initialState);

  // Start the sagas
  sagaMiddleware.run(sagas);

  return store;
};
