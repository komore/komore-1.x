import { deferPromise, isObservable, switchMap, type Observable } from '@komore/reactive';
import { of } from 'rxjs';

/**
 * Creates a function that returns a response as an observable object
 * @param validator Optional object validator
 * @returns Function that returns a response as an observable object
 * @template T Response payload interface
 */
export function responseToJson<T = unknown>(
  validator?: (json: unknown) => T | Observable<T>
): (response: Response) => Observable<T> {
  if (validator !== undefined) {
    return response =>
      deferPromise(() => response.json()).pipe(
        switchMap(json => {
          const result = validator(json);
          return isObservable(result) ? result : of(result);
        })
      );
  }

  return response => deferPromise(() => response.json());
}
