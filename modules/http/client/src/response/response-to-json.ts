import { defer, isObservable, mergeMap, of, type Observable } from 'rxjs';

/**
 * Creates a function that returns an HTTP client response as an observable object
 *
 * @param validator Optional object validator
 * @returns Function that returns a response as an observable object
 * @template T Response payload interface
 * @deprecated Use responseToJson from @komore/http//client
 */
export function responseToJson<T = unknown>(
  validator?: (json: unknown) => T | Observable<T>
): (response: Response) => Observable<T> {
  return validator !== undefined
    ? response =>
        defer(() => response.json()).pipe(
          mergeMap(json => {
            const result = validator(json);
            return isObservable(result) ? result : of(result);
          })
        )
    : response => defer(() => response.json());
}
