import 'babel-polyfill';
import { get } from '../domain/utils/externalData';
import { wait } from '../domain/utils/wait';
import { debounce } from '../domain/utils/debounce';

export const INPUT_TEXT_VALUE_CHANGE = Symbol();
export const API_SUCCESS = Symbol();
export const API_FAIL = Symbol();
export const DELETE_SEARCH_ITEM = Symbol();

export const onChangeValue = (value)=> ({ type : INPUT_TEXT_VALUE_CHANGE, value });
export const onDeleteSearchItem = ()=> ({ type : DELETE_SEARCH_ITEM });
export const getApiDataSuccess = (apiData)=> ({ type : API_SUCCESS, apiData });
export const getApiDataFail = ()=> ({ type : API_FAIL });

export const SHOW_LOADING = 'SHOW_LOADING';
export const RESULT_YOUTUBE_DATA = 'RECEIVE_YOUTUBE_DATA';
export const ERROR_DATA = 'ERROR_DATA';
const showLoading = () => ({ type: SHOW_LOADING });
const resultYoutubeData = (result) => ({ type: RESULT_YOUTUBE_DATA, result });
const errorData = (err) => ({ type: ERROR_DATA, err });

export const fetchYoutubeData = () => (
  (dispatch, getState) => {
    dispatch(showLoading());
    const searchWord = getState().inputTextValue;
    return get(`https://dry-plains-46710.herokuapp.com/index.php?sw=${searchWord}`)
      .then(res => JSON.parse(res))
      .then(data => dispatch(resultYoutubeData(data)))
      .catch(err => dispatch(errorData(err)))
  }
);

export const serialFetchYoutubeData = () => (
  (dispatch, getState) => {
    debounce(()=> {
      const doSerial = async ()=>{
        await wait(500);
        dispatch(showLoading());

        let result = {};
        const searchWord = getState().inputTextValue;
        await get(`https://dry-plains-46710.herokuapp.com/index.php?sw=${searchWord}`)
          .then((res) => {
            result = JSON.parse(res);
          })

        const totalCount = result.pageInfo.totalResults;
        await get(`https://dry-plains-46710.herokuapp.com/index.php?sw=${totalCount}`)
          .then((res) => {
            return dispatch(resultYoutubeData(JSON.parse(res)))
          })
      };
      return doSerial().catch((err)=>{
        return dispatch(errorData(err))
      });
    },500);
  }
)

export const parallelFetchYoutubeData = () => (
  (dispatch, getState) => {
    dispatch(showLoading());
    const searchWord = getState().inputTextValue;

    return Promise.all([
      get(`https://dry-plains-46710.herokuapp.com/index.php?sw=${searchWord}`),
      get(`https://dry-plains-46710.herokuapp.com/index.php?sw=angular.js`),
      get(`https://dry-plains-46710.herokuapp.com/index.php?sw=vue.js`),
    ])
    .then((res) => {
      const data = res.map((item) => JSON.parse(item));
      return dispatch(resultYoutubeData(data[2]))
    })
    .catch((err) => {
      return dispatch(errorData(err))
    })
  }
)


