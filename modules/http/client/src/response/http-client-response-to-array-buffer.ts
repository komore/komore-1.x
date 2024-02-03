import { deferPromise } from '@komore/reactive';

import { fetchResponseSymbol } from './fetch-response-symbol';
import { type HttpClientResponse } from './http-client-response';

/**
 * Create a function that returns a response as an observable array buffer
 *
 * @returns Function that returns a response as an observable array buffer
 */
export function httpClientResponseToArrayBuffer(): (response: HttpClientResponse) => Observable<ArrayBuffer> {
  return response => deferPromise(() => response[fetchResponseSymbol].arrayBuffer());
}
