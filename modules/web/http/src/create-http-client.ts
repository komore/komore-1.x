import { Observable } from '@komore/reactive';
import type { HttpClient } from './http-client';
import type { HttpClientOptions } from './http-client-options';

/**
 * Creates an HTTP client
 * @param options Options
 * @returns HTTP client
 * @template DefaultContextType Default contextual information type
 */
export function createHttpClient<DefaultContextType = never>(
  options?: HttpClientOptions
): HttpClient<DefaultContextType> {
  return <ContextType = DefaultContextType>(
    input: string | URL | Request,
    _context: ContextType
  ): Observable<Response> =>
    new Observable<Response>(observer => {
      const request = input instanceof URL ? input.href : input;
      const abortController = new AbortController();
      const { signal } = abortController;
      const requestInit: RequestInit = {
        ...options,
        signal
      };
      let emitted = false;

      function errorHandler(error: unknown) {
        emitted = true;
        observer.error(error);
      }

      fetch(request, requestInit)
        .then(response => {
          emitted = true;
          observer.next(response);
          observer.complete();
        })
        .catch(errorHandler);

      return () => {
        if (!emitted) {
          abortController.abort();
        }
      };
    });
}

// https://github.com/samundrak/fetch-progress/blob/master/index.js
