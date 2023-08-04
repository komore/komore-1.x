import { Observable } from 'rxjs';

import { type HttpClient } from './http-client';
import { type HttpClientOptions } from './http-client-options';

/**
 * Creates an HTTP client
 *
 * @param options HTTP client options
 * @returns HTTP client
 * @deprecated Use createHttpClient from @komore/http/client
 */
export function createHttpClient(options?: HttpClientOptions): HttpClient {
  const defaultOptions = options?.defaultOptions;
  const driver = options?.driver ?? fetch;

  return ({ url, options }) => {
    return new Observable<Response>(subscriber => {
      const abortController = new AbortController();
      const { signal } = abortController;
      const httpRequest = new Request(url, { ...defaultOptions, ...options, signal });
      let emitted = false;

      function responseHandler(response: Response) {
        emitted = true;
        subscriber.next(response);
        subscriber.complete();
      }

      function errorHandler(error: unknown) {
        emitted = true;
        subscriber.error(error);
      }

      driver(httpRequest).then(responseHandler).catch(errorHandler);

      subscriber.add(() => {
        if (!emitted) {
          abortController.abort();
        }
      });
    });
  };
}
