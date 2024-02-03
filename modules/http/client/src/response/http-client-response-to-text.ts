import { deferPromise } from '@komore/reactive';

import { fetchResponseSymbol } from './fetch-response-symbol';
import { type HttpClientResponse } from './http-client-response';

/**
 * Creates a function that returns an HTTP client response as an observable string
 *
 * @returns Function that returns an HTTP client response as an observable string
 */
export function httpClientResponseToText(): (response: HttpClientResponse) => Observable<string> {
  return response => deferPromise(() => response[fetchResponseSymbol].text());
}
