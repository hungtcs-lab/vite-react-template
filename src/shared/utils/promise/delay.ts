/**
 * delay 函数用于将输入数据包装成一个 Promise，并在指定的毫秒数后解决该 Promise，用于模拟延迟或定时操作。
 *
 * @example
 * ```js
 * Promise.resolve(1)
 *   .then(() => console.log(new Date().getSeconds()))
 *   .then(delay(3000))
 *   .then(() => console.log(new Date().getSeconds()))
 * ```
 */
export function delay<T = any>(ms: number) {
  return (data: T) => {
    return new Promise<T>((resolve) => {
      setTimeout(() => resolve(data), ms);
    });
  };
}
