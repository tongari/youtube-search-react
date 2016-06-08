import {combineReducers} from 'redux';
import {
  INPUT_TEXT_VALUE_CHANGE,
  API_SUCCESS,
  API_FAIL,
  DELETE_SEARCH_ITEM
} from '../actions/index'

const inputTextValue = (state = 'react.js', action) => {

  switch (action.type) {
    case INPUT_TEXT_VALUE_CHANGE:
      return action.value;

    default:
      return state;
  }
}

const apiData = (state = {}, action) => {
  switch (action.type) {
    case API_SUCCESS:
      return action.apiData;

    case API_FAIL:
      return 'fail connect'

    case DELETE_SEARCH_ITEM:
      return {}

    default:
      return state;
  }
}

const rootReducer = combineReducers({apiData, inputTextValue});

export default rootReducer
