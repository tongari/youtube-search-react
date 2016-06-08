export const INPUT_TEXT_VALUE_CHANGE = Symbol();
export const API_SUCCESS = Symbol();
export const API_FAIL = Symbol();
export const DELETE_SEARCH_ITEM = Symbol();

export const onChangeValue = (value)=> ({ type : INPUT_TEXT_VALUE_CHANGE, value });
export const onDeleteSearchItem = ()=> ({ type : DELETE_SEARCH_ITEM });
export const getApiDataSuccess = (apiData)=> ({ type : API_SUCCESS, apiData });
export const getApiDataFail = ()=> ({ type : API_FAIL });

