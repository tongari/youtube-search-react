import 'babel-polyfill';
import {get} from './utils/externalData';
import {wait} from './utils/wait';
import {debounce} from './utils/debounce';

const YOUTUBE_API_KEY = 'set your youtube api key';
const SEARCH_NUM = 50;
let isLock = false;

export const getYoutubeData = (searchWord, clean, success, fail) => {

  if(isLock)return;

  debounce(()=> {

    const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&part=snippet&maxResults=${SEARCH_NUM}&q=${searchWord}`;
    let isError = false;

    (async()=> {

      isLock = true;
      clean();

      await wait(200)

      await get(url).then(res => {
        let data = JSON.parse(res);
        success(Object.assign({}, data));

      }).catch(e => {
        fail();
        isError = true;
      });
      if (isError)return;
      isLock = false;

    })()

  },500);
}
