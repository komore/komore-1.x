import { Observable } from '../observable';

/**
 * Creates an observable that emits the resolved value from a promise, or forwards the error if one is encountered
 * @param promise Promise
 * @returns Observable that emits the resolved value or forwards the error
 * @template PromiseType Promise type
 */
export function fromPromise<T>(promise: Promise<T>): Observable<T> {
  return new Observable<T>(observer => {
    promise
      .then(value => {
        if (!observer.closed) {
          observer.next(value);
          observer.complete();
        }
      })
      .catch(error => observer.error(error));
  });
}
