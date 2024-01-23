import { Observable } from '@komore/reactive';

import { type HttpClient } from './http-client';
import { type HttpClientOptions } from './http-client-options';
import { type HttpClientResponse } from './response/http-client-response';
import { responseToHttpClientResponse } from './response/response-to-http-client-response';
import { httpHeadersToFetchHeaders } from './header/http-headers-to-fetch-headers';

/**
 * Creates an HTTP client
 *
 * @param options HTTP client options
 * @returns HTTP client
 */
export function createHttpClient(options: HttpClientOptions): HttpClient {
  const { defaultOptions, driver = fetch } = options;

  return ({ headers, method, options, url }) => {
    return new Observable<HttpClientResponse>(subscriber => {
      const abortController = new AbortController();
      const { signal } = abortController;
      const httpRequest = new Request(url, {
        ...defaultOptions,
        ...options,
        ...(method !== undefined ? { method } : {}),
        ...(headers !== undefined ? { headers: headers.reduce(httpHeadersToFetchHeaders, new Headers()) } : {}),
        signal,
      });
      let emitted = false;

      function responseHandler(response: HttpClientResponse) {
        emitted = true;
        subscriber.next(response);
        subscriber.complete();
      }

      function errorHandler(error: unknown) {
        emitted = true;
        subscriber.error(error);
      }

      driver(httpRequest).then(responseToHttpClientResponse).then(responseHandler).catch(errorHandler);

      subscriber.add(() => {
        if (!emitted) {
          abortController.abort();
        }
      });
    });
  };
}
