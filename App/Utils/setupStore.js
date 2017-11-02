// Node Core Third party
import { applyMiddleware, createStore, compose } from 'redux';
// App Modules
import reducer from '../Reducers';

export default function configureStore() {
  const store = createStore(reducer);
  return store;
}
