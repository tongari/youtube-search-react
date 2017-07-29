import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/index';

export default function configStore() {
  return createStore(rootReducer,
    applyMiddleware(thunkMiddleware)
  );
}
