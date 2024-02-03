import { asObservable, deferPromise, mergeMap } from '@komore/reactive';

import { fetchResponseSymbol } from './fetch-response-symbol';
import { type HttpClientResponse } from './http-client-response';

/**
 * Creates a function that returns an HTTP client response as an observable object
 *
 * @param validator Optional object validator
 * @returns Function that returns a response as an observable object
 * @template T Response payload interface
 */
export function httpClientResponseToJson<T = unknown>(
  validator?: (json: unknown) => T | Observable<T>
): (response: HttpClientResponse) => Observable<T> {
  return validator !== undefined
    ? response =>
        deferPromise(() => response[fetchResponseSymbol].json()).pipe(
          mergeMap(json => {
            const result = validator(json);
            return asObservable(result);
          })
        )
    : response => deferPromise(() => response[fetchResponseSymbol].json());
}
