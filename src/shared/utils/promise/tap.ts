/**
 * tap 函数允许在数据流中执行一个回调函数，然后返回数据本身，用于数据观察、调试或附加逻辑而不改变数据
 *
 * @example
 * ```js
 * Promise.resolve(1)
 *   .then(tap(v => console.log(v)))
 *   .then(v => console.log(v))
 *   .then(v => console.log(v))
 * ```
 */
export function tap<T>(cb: (data: T) => void) {
  return (data: T) => {
    cb(data);
    return data;
  };
}
