import { deferPromise } from '@komore/reactive';

import { fetchResponseSymbol } from './fetch-response-symbol';
import { type HttpClientResponse } from './http-client-response';

/**
 * Creates a function that returns an HTTP client response as an observable blob
 *
 * @returns Function that returns an HTTP client response as an observable blob
 */
export function httpClientResponseToBlob(): (response: HttpClientResponse) => Observable<Blob> {
  return response => deferPromise(() => response[fetchResponseSymbol].blob());
}
