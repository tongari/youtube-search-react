import {combineReducers} from 'redux';
import * as actions from '../actions/index'

const inputTextValue = (state = 'react.js', action) => {

  switch (action.type) {
    case actions.INPUT_TEXT_VALUE_CHANGE:
      return action.value;

    default:
      return state;
  }
}

const apiData = (state = {}, action) => {
  switch (action.type) {
    case actions.API_SUCCESS:
      return action.apiData;

    case actions.API_FAIL:
      return 'fail connect'

    case actions.DELETE_SEARCH_ITEM:
      return {}

    default:
      return state;
  }
}

const youtubeData = (state = {}, action) => {
  switch (action.type) {
    case actions.SHOW_LOADING:
      return {isFetching: true};

    case actions.RESULT_YOUTUBE_DATA:
      return {data: action.result}

    case actions.ERROR_DATA:
      return {isError: true}

    case actions.DELETE_SEARCH_ITEM:
      return {}

    default:
      return state;
  }
}

const rootReducer = combineReducers({apiData, inputTextValue, youtubeData});

export default rootReducer
