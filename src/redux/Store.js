import { createStore } from 'redux';
import counterReducer from './Reducers/CounterReducer';

// Use __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ correctly
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;

const store = createStore(
  counterReducer,
  composeEnhancers()
);

export default store;
