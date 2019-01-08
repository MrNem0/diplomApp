import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise';

import rootReducer from '../reducers';

export default function initStore(initialState) {
  const middleware = [];
  middleware.push(thunkMiddleware);
  middleware.push(promise);

  const logger = createLogger({
    level: 'info',
    collapsed: true
  });

  if (typeof window !== 'undefined') {
    middleware.push(logger);
  }

  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
}
