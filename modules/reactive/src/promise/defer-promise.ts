import { defer as rxjsDefer } from 'rxjs';

/**
 * Creates an observable that delegates the creation of a promise that will then be turned into an observable
 *
 * @param factory Factory that returns a promise
 * @returns Observable
 * @template T Value type
 */
export function deferPromise<T>(factory: () => PromiseLike<T>): Observable<T> {
  return rxjsDefer(() => factory());
}
