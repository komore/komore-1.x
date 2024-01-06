import { Observable } from '../observable';

/**
 * Creates an observable that emits the resolved value from a promise, or forwards the error if one is encountered
 *
 * @param promise Promise
 * @returns Observable that emits the resolved value or forwards the error
 * @template PromiseType Promise type
 */
export function fromPromise<T>(promise: Promise<T>): Observable<T> {
  return new Observable<T>(subscriber => {
    promise
      .then(value => {
        if (!subscriber.closed) {
          subscriber.next(value);
          subscriber.complete();
        }
      })
      .catch(error => {
        subscriber.error(error);
        subscriber.complete();
      });
  });
}
