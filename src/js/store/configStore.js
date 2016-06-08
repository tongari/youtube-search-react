import {createStore} from 'redux';
import rootReducer from '../reducers/index';

export default function configStore() {
  return createStore(rootReducer);
}
