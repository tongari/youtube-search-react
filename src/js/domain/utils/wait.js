/**
 *
 * @param millisecond
 * @returns {Promise}
 */
export const wait = (millisecond = 1000) => {

  return new Promise(resolve => {

    setTimeout(() => {
      console.log(`${millisecond}ミリ秒待機しました。`);
      resolve();
    }, millisecond);
  });
}
