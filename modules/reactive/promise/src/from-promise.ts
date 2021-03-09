import type { Observable } from '@komore/reactive';
import { from as rxjsFrom } from 'rxjs';

/**
 * Creates an observable that emits the resolved value from a promise, or forwards the error if one is encountered
 * @param promise Promise
 * @returns Observable that emits the resolved value or forwards the error
 * @template PromiseType Promise type
 */
export function fromPromise<T>(promise: PromiseLike<T>): Observable<T> {
  return (rxjsFrom(promise) as unknown) as Observable<T>;
}
