import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './../reducers';
import createLogger from 'redux-logger';

export default function configureStore(initialState) {
  
  const logger = createLogger()
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk, logger),
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
