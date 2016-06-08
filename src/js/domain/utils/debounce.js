let timer = 0;
/**
 *
 * @param callback
 * @param millisecond
 */
export const debounce = (callback, millisecond = 1000) => {
  clearTimeout(timer);
  timer = setTimeout(callback, millisecond);
}
