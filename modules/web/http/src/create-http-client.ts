import { Observable } from 'rxjs';
import { HttpClient } from './http-client';

/**
 * Creates an HTTP client
 * @param options Options
 * @returns HTTP client
 */
export function createHttpClient(options?: Omit<RequestInit, 'signal'>): HttpClient {
  return <T>(
    input: string | URL | Request,
    responseType?: 'blob' | 'json' | 'response' | 'text'
  ): Observable<Response | string | Blob | T> =>
    new Observable<Response | string | Blob | T>(observer => {
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

          if (responseType === undefined || responseType === 'response') {
            observer.next(response);
            observer.complete();
          } else {
            const result =
              responseType === 'json'
                ? response.json().then(json => observer.next(json))
                : responseType === 'text'
                ? response.text().then(text => observer.next(text))
                : response.blob().then(blob => observer.next(blob));
            result.then(() => observer.complete());
          }
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
