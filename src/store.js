import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

// import todos from './reducers/todos'

export default function configureStore(initialState) {
  const reducer = combineReducers({
    // todos,
  });

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  );

  return store;
}
