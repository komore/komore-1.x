import { Observable } from '@komore/reactive';

import { type HttpClient } from './http-client';
import { type HttpClientOptions } from './http-client-options';
import { type HttpClientRequestOptions } from './http-client-request-options';
import { normalizeUrl } from './normalize-url';

/**
 * Creates an HTTP client
 * @param options Options
 * @returns HTTP client
 * @template DefaultContextType Default contextual information type
 */
export function createHttpClient<DefaultContextType = undefined>(
  options?: HttpClientOptions
): HttpClient<DefaultContextType> {
  return <ContextType = DefaultContextType>(
    url: string | URL,
    requestOptions?: HttpClientRequestOptions<ContextType>
  ): Observable<Response> =>
    new Observable<Response>(subscriber => {
      const urlString = normalizeUrl(url);
      const abortController = new AbortController();
      const { signal } = abortController;
      const requestInit: RequestInit = {
        ...options,
        ...requestOptions,
        signal,
      };
      let emitted = false;

      function errorHandler(error: unknown) {
        emitted = true;
        subscriber.error(error);
      }

      fetch(urlString, requestInit)
        .then(response => {
          emitted = true;
          subscriber.next(response);
          subscriber.complete();
        })
        .catch(errorHandler);

      subscriber.add(() => {
        if (!emitted) {
          abortController.abort();
        }
      });
    });
}
