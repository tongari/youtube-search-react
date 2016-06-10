import 'babel-polyfill';
import {get} from './utils/externalData';
import {wait} from './utils/wait';
import {debounce} from './utils/debounce';

let isLock = false;

export const getYoutubeData = (searchWord, clean, success, fail) => {

  if(isLock)return;

  debounce(()=> {

    const url = `https://dry-plains-46710.herokuapp.com/index.php?sw=${searchWord}`;
    let isError = false;

    (async()=> {

      isLock = true;
      clean();

      await wait(200)

      await get(url).then(res => {
        let data = JSON.parse(res);
        success(data);

        }).catch(e => {
            fail();
          isError = true;
      });

      if (isError)return;
      isLock = false;

    })()

  },500);

}
