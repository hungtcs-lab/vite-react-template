/**
 * 这个函数用于创建一个Promise，它在超时时间（由ms参数指定的毫秒数）后自动解决，成功地完成任务。
 * 同时，如果提供了signal参数，它还会监听signal对象上的abort事件，当abort事件被触发时，会取消定时器并拒绝Promise，
 * 以提供一种在执行操作时设置超时或在需要时取消操作的机制。
 *
 * @example
 * ```js
 * const ac = new AbortController();
 * setTimeout(() => ac.abort(), 2000);
 * timeout(3000, ac.signal)
 *   .then(tap(v => console.log('timeout')))
 *   .catch(err => console.error(err))
 * ```
 */
export function timeout(ms: number, signal?: AbortSignal) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, ms);
    signal?.addEventListener("abort", (e) => {
      clearTimeout(timer);
      reject(e);
    });
  });
}
